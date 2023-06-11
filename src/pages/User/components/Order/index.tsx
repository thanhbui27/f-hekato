import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useMemo } from "react";
import Iconify from "src/admin/components/iconify/Iconify";
import Label from "src/admin/components/label/Label";
import { statusDetails } from "src/admin/utils/formatStatus";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { useAppSelector } from "src/hooks/useAppSelector";
import { getOrderByUser } from "src/store/orders/slice";

const OrderUser = () => {
  const { me } = useAppSelector((state) => state.auth);
  const { orderByUser } = useAppSelector((state) => state.orders);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOrderByUser(me?.id!));
  }, []);

  const row = useMemo(() => {
    return orderByUser.map((item, index) => {
      return {
        id: index + 1,
        orderId: item.orderId,
        quantity: item.orderDetails.reduce(
          (prev, next) => prev + next.quantity,
          0
        ),
        total: item.total,
        status: item.payments.status,
        createAt :  new Date(item.createAt).toDateString(),
      };
    });
  }, [orderByUser]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "Mã hoá đơn", width: 100 },
    {
      field: "orderId",
      headerName: "Mã đặt hàng",
      flex: 1,
    },
    { field: "quantity", headerName: "Số lượng sản phẩm", flex: 1 },
    { field: "total", headerName: "Tổng tiền", flex: 1 },
    {
      field: "status",
      headerName: "Trạng thái",
      flex: 1,
      renderCell: (params) => {
        return (
          <Label color={statusDetails(params.value).color}>
            {statusDetails(params.value).messager}
          </Label>
        );
      },
    },
    { field: "createAt", headerName: "Thời gian", flex: 1 },
    {
      field: "",
      headerName: "",
      width: 50,
      renderCell: (params) => {
        return (
          <>
            <IconButton
              size="large"
              color="inherit"
              //   onClick={(e) => handleOpenMenu(e, params.row.id.split("-"))}
            >
              <Iconify icon={"eva:more-vertical-fill"} />
            </IconButton>
          </>
        );
      },
    },
  ];

  return (
    <Box>
      <DataGrid
        columns={columns}
        rows={row}
        loading={!(row.length > 0)}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[5, 10, 25]}
      />
    </Box>
  );
};

export default OrderUser;
