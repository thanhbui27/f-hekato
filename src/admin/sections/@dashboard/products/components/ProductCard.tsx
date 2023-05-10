// @mui
import { Box, Card, Link, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
// utils
import { fCurrency } from "../../../../utils/formatNumber";
// components
import { ColorPreview } from "../../../../components/color-utils";
import { product } from "src/services/api/product/types";
import products from "src/admin/_mock/products";
import { url } from "src/services/request";
import { TKeyActionModal } from "src/admin/pages/ProductsPage";
import Iconify from "src/admin/components/iconify/Iconify";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { deleteProduct, getProductAll } from "src/store/product/slice";
import { alert } from "src/components/Common/Alert";
import { useState } from "react";

// ----------------------------------------------------------------------

const StyledProductImg = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

// ----------------------------------------------------------------------

interface Props {
  product: product;
  handleOpenModal: (value: TKeyActionModal, product: product) => void;
}

const ShopProductCard: React.FC<Props> = ({ product, handleOpenModal }) => {
  const [isIconDelete, setIsIconDelete] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  
  const handleDeleteProduct = async () => {
   const res = await dispatch(deleteProduct(product.productId));
   if(deleteProduct.fulfilled.match(res)){
      alert("success", "Xoá sản phẩm thành công");
      await dispatch(getProductAll({q : "", PageIndex : 1, PageSize : 20}));
   }else{
    alert("error", "Xoá sản phẩm thất bại");
   }
  }

  return (
    <Card sx={{ cursor: "pointer", position: "relative" }} onMouseOver={() => setIsIconDelete(true)} onMouseOut={() => setIsIconDelete(false)}>
      <Iconify
        icon="eva:close-circle-outline"
        width={24}
        sx={{ position: "absolute", right: "10px", top: " 10px", zIndex : "99", display : !isIconDelete ? "none" : "block" }}
        onClick={handleDeleteProduct}
      />
      <Box>
        <Box
          sx={{ pt: "100%", position: "relative" }}
          onClick={() => handleOpenModal(TKeyActionModal.EDIT_PRODUCT, product)}
        >
          {/* {product.priceNew && ( 
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )} */}
          <StyledProductImg
            alt={product.productName}
            src={`${url}Resources${product.list_image[0].url_image}`}
          />
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
          <Link color="inherit" underline="hover">
            <Typography variant="subtitle2" noWrap>
              {product.productName}
            </Typography>
          </Link>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <ColorPreview colors={products[0].colors} />
            <Typography variant="subtitle1">
              <Typography
                component="span"
                variant="body1"
                sx={{
                  color: "text.disabled",
                  textDecoration: "line-through",
                }}
              >
                {product.priceOld && fCurrency(product.priceOld)}
              </Typography>
              &nbsp; {fCurrency(product.priceNew)}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
};

export default ShopProductCard;
