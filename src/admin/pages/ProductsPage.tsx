import { Helmet } from "react-helmet-async";
import { useState } from "react";
// @mui
import { Button, Container, Stack, Typography } from "@mui/material";
// components
import {
  ProductSort,
  ProductList,
  ProductFilterSidebar,
} from "../sections/@dashboard/products";
// mock
import Iconify from "../components/iconify/Iconify";
import { ProductModal } from "../sections/@dashboard/products/components/ProductModal";
import { product } from "src/services/api/product/types";
import ProductModalAction from "../sections/@dashboard/products/components/ProductModalAction";

// ----------------------------------------------------------------------

export enum TKeyActionModal {
  ADD_PRODUCT = "add_product",
  EDIT_PRODUCT = "edit_product",
  FILER_PRODUCT = "filer_product"
}

export default function ProductsPage() {
  const [openFilter, setOpenFilter] = useState(false);
  const [openAction, setOpenAction] = useState<TKeyActionModal>();
  const [product, setProduct] = useState<product>()
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleModelAction = (value: string, product? : product) => {
    setOpenAction(value as TKeyActionModal);
    setProduct(product)
  };

  return (
    <>
      <Helmet>
        <title> Dashboard: Products | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" sx={{ mb: 5 }}>
            Products
          </Typography>
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={() => handleModelAction(TKeyActionModal.ADD_PRODUCT)}
          >
            New Products
          </Button>
        </Stack>

        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        >
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>

        <ProductList openModal={openAction!} handleOpenModal={handleModelAction} />
        {openAction === TKeyActionModal.ADD_PRODUCT && (
          <ProductModal open={true} handleClose={() => handleModelAction("")} />
        )}
         {openAction === TKeyActionModal.EDIT_PRODUCT && (
          <ProductModalAction product={product!} open={true} handleClose={() => handleModelAction("")} />
        )}
      </Container>
    </>
  );
}
