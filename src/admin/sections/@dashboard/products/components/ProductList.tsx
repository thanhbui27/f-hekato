import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------

interface Props{
  products: any,
};

const  ProductList : React.FC<Props> = ({ products, ...other }) => {
  return (
    <Grid container spacing={3} {...other}>
      {products.map((product : any) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ShopProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList
