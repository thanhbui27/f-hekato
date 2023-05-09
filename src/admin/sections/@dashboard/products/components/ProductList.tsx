// @mui
import { Box, Grid } from "@mui/material";
import ShopProductCard from "./ProductCard";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { paramProduct, product } from "src/services/api/product/types";
import { useEffect, useState } from "react";
import { useAppSelector } from "src/hooks/useAppSelector";
import { getProductAll } from "src/store/product/slice";
import Pagination from "src/components/Common/Pagination";
import { TKeyActionModal } from "src/admin/pages/ProductsPage";

// ----------------------------------------------------------------------

interface Props {
  openModal: TKeyActionModal;
  handleOpenModal: (value: TKeyActionModal, product : product) => void;
}

const ProductList: React.FC<Props> = ({ openModal, handleOpenModal, ...other }) => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState<paramProduct>({
    q: "",
    PageIndex: 1,
    PageSize: 20,
  });
  const selecterProduct = useAppSelector(
    (state) => state.product.productGetAll
  );
  const { items, pageCount, pageIndex, pageSize, totalRecords } =
    selecterProduct;

  const handleOnChangePage = (value: any) => {
    setQuery({ ...query, PageIndex: value });
  };

  useEffect(() => {
    dispatch(getProductAll(query));
  }, [query, dispatch]);
  return (
    <Box>
      <Grid container spacing={3} {...other}>
        {items.map((product: product) => (
          <Grid key={product.productId} item xs={12} sm={6} md={3}>
            <ShopProductCard product={product} handleOpenModal={handleOpenModal} />
          </Grid>
        ))}
      </Grid>
      <Box
        mt={5}
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
    </Box>
  );
};

export default ProductList;
