import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useMemo } from "react";
import Iconify from "src/admin/components/iconify/Iconify";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { useAppSelector } from "src/hooks/useAppSelector";
import { SubOneItem, addToCart, deleteItemToCart, getCartByIdU } from "src/store/cart/slice";

const CartUser = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const { me, isAuth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuth) dispatch(getCartByIdU({ uid: me?.session.sessionId! }));
  }, []);
  
  const addItemCart = async (pid: number, quantity: number) => {
   const res = await dispatch(
      addToCart({
        sessionId: me?.session.sessionId!,
        productId: pid,
        quantity: quantity,
      })
    );
    if(addToCart.fulfilled.match(res)){
        dispatch(getCartByIdU({ uid: me?.session.sessionId! }));
    }
  };

  const removeItem = async (id : number) => {
    const getCart = cart.find(x => x.id === Number(id))
    const res = await dispatch(deleteItemToCart({Id: Number(getCart?.id!)}));
    if (deleteItemToCart.fulfilled.match(res)) {
        dispatch(getCartByIdU({ uid: me?.session.sessionId! }));
    }
  };
const subItemCart = async (pid: number, quantity: number, idc : number) => {
    if(quantity - 1 === 0){
        removeItem(idc)
    }else{
        const res = await dispatch(
            SubOneItem({
             sessionId: me?.session.sessionId!,
             productId: pid,
             quantity: quantity,
           })
         );
         if(SubOneItem.fulfilled.match(res)){
             dispatch(getCartByIdU({ uid: me?.session.sessionId! }));
         }
    }
   
   };

  const rows = useMemo(() => {
    return cart.map((item, index) => {
      return {
        id: `${item.id}-${item.productGetAll.productId}`,
        product: item.productGetAll.productName,
        price: item.productGetAll.priceNew,
        quantity: item.quantity,
        total: item.productGetAll.priceNew * item.quantity,
      };
    });
  }, [cart]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "#", width: 100 },
    { field: "product", headerName: "Tên sản phẩm", flex: 1 },
    { field: "price", headerName: "Giá", flex: 1 },
    {
      field: "quantity",
      headerName: "Số lượng",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box>
            <Button
              sx={{ fontWeight: 800, fontSize: 18 }}
              onClick={() =>
                addItemCart(params.row.id.split("-")[1], params.row.quantity)
              }
            >
              +
            </Button>
            <span>{params.row.quantity}</span>
            <Button sx={{ fontWeight: 800, fontSize: 18 }}   onClick={() =>
                subItemCart(params.row.id.split("-")[1], params.row.quantity,params.row.id.split("-")[0])
              }>-</Button>
          </Box>
        );
      },
    },
    { field: "total", headerName: "Tổng cộng", flex: 1 },
    { field: "", headerName: "", width : 10 , renderCell : (params) => {
        return <Iconify icon={"mingcute:close-fill"} sx={{cursor : "pointer"}} onClick={() => removeItem(params.row.id.split("-")[0])}/>
    } },

  ];
  
  return (
    <Box>
      {cart.length > 0 ? (
        <DataGrid rows={rows} columns={columns} loading={!(cart.length > 0)} />
      ) : (
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
          Bạn chưa có sản phẩm nào trong giỏ hàng
        </Typography>
      )}
    </Box>
  );
};

export default CartUser;
