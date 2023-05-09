// @mui
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../../utils/formatNumber';
// components
import { ColorPreview } from '../../../../components/color-utils';
import { product } from 'src/services/api/product/types';
import products from 'src/admin/_mock/products';
import { url } from 'src/services/request';
import { TKeyActionModal } from 'src/admin/pages/ProductsPage';

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

interface Props {
  product: product,
  handleOpenModal : (value : TKeyActionModal, product : product) => void
};

const ShopProductCard : React.FC<Props> = ({ product, handleOpenModal }) => {


  return (
    <Card sx={{ cursor : "pointer"}} onClick={() => handleOpenModal(TKeyActionModal.EDIT_PRODUCT,product)}>
       <Box sx={{ pt: '100%', position: 'relative'}}>
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
        <StyledProductImg alt={product.productName} src={`${url}Resources${product.list_image[0].url_image}`} />
      </Box> 

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {product.productName}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <ColorPreview colors={products[0].colors} />
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {product.priceOld && fCurrency(product.priceOld )}
            </Typography> 
            &nbsp; {fCurrency(product.priceNew )}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}

export default ShopProductCard
