import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { useAppSelector } from "src/hooks/useAppSelector";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { categories } from "src/services/api/product/types";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useMemo } from "react";
import { getDetailsOrder } from "src/store/orders/slice";
import Loading from "src/components/Common/Loading";
import account from "src/admin/_mock/account";
import Label from "src/admin/components/label";
import { statusPayment } from "src/admin/utils/formatStatus";

interface Props {
  orderId: number;
  open: boolean;
  handleClose: () => void;
}

export interface IProduct {
  productName: string;
  image_Url: File;
  quantity: number;
  priceNew: number;
  priceOld: number;
  shortDetails: string;
  productDescription: string;
  categories: categories[];
}

const ModalOrder: React.FC<Props> = ({ orderId, open, handleClose }) => {
  const { orderDetails } = useAppSelector((state) => state.orders);
  const dispath = useAppDispatch();

  useEffect(() => {
    if (orderId !== 0) {
      dispath(getDetailsOrder(orderId));
    }
  }, [orderId]);

  /*
    - tên khách hàng
    - sản phẩm
    - số lượng
    - giá sản phẩm
    - hình thức thanh toán
  */
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "fullName", headerName: "Tên khách hàng", flex: 1 ,   renderCell: (params) => {
      return (
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar alt={params.value} src={account.photoURL} />
          <Typography variant="subtitle2" noWrap>
            {params.value}
          </Typography>
        </Stack>
      );
    },},
    { field: "productName", headerName: "Tên sản phẩm", flex: 1 },
    {
      field: "quantity",
      headerName: "Số lượng",
      width : 100,
    },
    {
      field: "price",
      headerName: "Giá thành",
      flex: 1,
    },
    {
      field: "payment",
      headerName: "Hình thức thanh toán",
      flex: 1,
      renderCell: (params) => {
        return (
          <Label color={statusPayment(params.value).color}>
            {statusPayment(params.value).messager}
          </Label>
        );
      },
    },
  ];
  const rows = useMemo(() => {
    if (Object.keys(orderDetails).length > 0) {
      return orderDetails.orderDetails.map((item) => {
        return {
          id: item.id,
          fullName: orderDetails.users.fullName,
          productName: item.products.productName,
          quantity: item.quantity,
          price: item.quantity * item.products.priceNew,
          payment: orderDetails.payments.provider,
        };
      });
    } else {
      return [];
    }
  }, [orderDetails]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      scroll={"body"}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle
        id="scroll-dialog-title"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        Chi tiết đơn hàng
      </DialogTitle>
      <DialogContent>
        {Object.keys(orderDetails).length > 0 ? (
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        ) : (
          <Loading />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Thoát</Button>
        <Button onClick={handleClose}>Xuất hoá đơn</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalOrder;
