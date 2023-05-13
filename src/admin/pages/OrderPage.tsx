import { Helmet } from "react-helmet-async";
import { useEffect, useMemo, useState } from "react";
// @mui
import {
  Card,
  Stack,
  Avatar,
  Popover,
  MenuItem,
  Container,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
// sections
import { UserListToolbar } from "../sections/@dashboard/user";
// mock
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { useAppSelector } from "src/hooks/useAppSelector";
import { paramProduct } from "src/services/api/product/types";
import account from "../_mock/account";
import { alert } from "src/components/Common/Alert";
import { getAllOrder, updateStatus } from "src/store/orders/slice";
import { StatusOrder } from "src/types/order";
import Pagination from "src/components/Common/Pagination";
import { statusDetails } from "../utils/formatStatus";
import ModalOrder from "../sections/@dashboard/order/ModalOrder";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Iconify from "../components/iconify";
import Label from "../components/label";
import Loading from "src/components/Common/Loading";
// ----------------------------------------------------------------------

const menu_aciton_table = [
  {
    icon: "mdi:eye-outline",
    key: StatusOrder.DETAIL,
    label: "Chi tiết đơn hàng",
    isDelete: false,
  },
  {
    icon: "fluent-mdl2:accept-medium",
    key: StatusOrder.ORDER_CONFIRMED,
    label: "Duyệt đơn hàng",
    isDelete: false,
  },
  {
    icon: "mdi:close-thick",
    key: StatusOrder.CANCELED,
    label: "Huỷ đơn hàng",
    isDelete: false,
  },
];
/* 
  - duyệt đơn hàng
  - huỷ đơn hàng,
  - xoá đơn hàng 
*/

const OrderPage = () => {
  const [query, setQuery] = useState<paramProduct>({
    q: "",
    PageIndex: 1,
    PageSize: 10,
  });

  const dispath = useAppDispatch();
  const {
    orders: { items, pageIndex, totalRecords, pageCount, pageSize },
  } = useAppSelector((state) => state.orders);
  const [open, setOpen] = useState({
    orderId: 0,
    paymentId: 0,
    anchorEl: null,
  });
  const [openModal, setOpenModal] = useState(false);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    dispath(getAllOrder(query));
  }, [query]);

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenMenu = (event: any, id: string[]) => {
    setOpen({
      orderId: Number(id[0]),
      paymentId: Number(id[1]),
      anchorEl: event.currentTarget,
    });
  };
  const handleUpdateStatus = async (id: number, status: string) => {
    const res = await dispath(updateStatus({ id, status }));
    if (updateStatus.fulfilled.match(res)) {
      alert("success", res.payload?.message!);
      await dispath(getAllOrder(query));
      handleCloseMenu();
    } else {
      alert("error", "Cập nhật trạng thái thất bại");
    }
  };
  const handleMenuPopup = (key: string) => {
    switch (key) {
      case StatusOrder.CANCELED:
        handleUpdateStatus(open.paymentId, StatusOrder.CANCELED);
        break;
      case StatusOrder.ORDER_CONFIRMED:
        handleUpdateStatus(open.paymentId, StatusOrder.ORDER_CONFIRMED);
        break;
      case StatusOrder.DETAIL:
        setOpenModal(true);
        break;
      default:
        break;
    }
  };

  const handleCloseMenu = () => {
    setOpen({
      orderId: 0,
      paymentId: 0,
      anchorEl: null,
    });
  };

  const handleOnChangePage = (value: any) => {
    setQuery({ ...query, PageIndex: value });
  };

  const handleFilterByName = (event: any) => {
    setQuery({ ...query, q: event.target.value });
    setFilterName(event.target.value);
  };

  const rows = useMemo(() => {
    return items.map((item, index) => {
      return {
        id: `${item.orderId}-${item.payments.paymentId}`,
        fullName: item.users.fullName,
        quantity: item.orderDetails.reduce((pre, next) => pre + next.quantity, 0),
        total: item.total,
        status: item.payments.status,
        createAt: new Date(item.createAt).toDateString(),
      };
    });
  }, [items]) 

  const columns: GridColDef[] =  [
      { field: "id", headerName: "#", width: 100 },
      {
        field: "fullName",
        headerName: "Tên khách hàng",
        flex: 1,
        renderCell: (params) => {
          return (
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar alt={params.value} src={account.photoURL} />
              <Typography variant="subtitle2" noWrap>
                {params.value}
              </Typography>
            </Stack>
          );
        },
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
                onClick={(e) => handleOpenMenu(e, params.row.id.split("-"))}
              >
                <Iconify icon={"eva:more-vertical-fill"} />
              </IconButton>
            </>
          );
        },
      },
    ];

  return (
    <>
      <Helmet>
        <title> Order | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Order
          </Typography>
        </Stack>
        {items.length > 0 ? (
          <Card>
            <UserListToolbar
              numSelected={0}
              filterName={filterName}
              onFilterName={handleFilterByName}
            />
            <DataGrid rows={rows} columns={columns} />
            <Box
              mt={5}
              mb={5}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Pagination
                className="pagi"
                currentPage={pageIndex}
                onPageChange={handleOnChangePage}
                pageSize={pageSize}
                siblingCount={pageCount}
                totalCount={totalRecords}
              />
            </Box>
          </Card>
        ) : (
          <Loading />
        )}
      </Container>
      <ModalOrder
        handleClose={handleCloseModal}
        open={openModal}
        orderId={open.orderId}
      />
      <Popover
        open={Boolean(open.anchorEl)}
        anchorEl={open.anchorEl}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            width: 240,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        {menu_aciton_table.map((item, index) => (
          <MenuItem
            key={index}
            sx={{ color: item.isDelete ? "error.main" : "" }}
            onClick={() => handleMenuPopup(item.key)}
          >
            <Iconify icon={item.icon} sx={{ mr: 2 }} />
            {item.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
};

export default OrderPage;
