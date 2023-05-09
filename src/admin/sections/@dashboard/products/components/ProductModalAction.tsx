import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import Input from "src/components/Common/Input";
import EditorJodit from "src/components/Common/Editor";
import { useEffect, useState } from "react";
import { useAppSelector } from "src/hooks/useAppSelector";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { getAllCategory } from "src/store/category/slice";
import { SubmitHandler, useForm } from "react-hook-form";
import { alert } from "src/components/Common/Alert";
import { categories, product } from "src/services/api/product/types";
import PoputListImage from "./PoputListImage";
import { getProductAll, productUpdate } from "src/store/product/slice";

interface Props {
  product: product;
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

const ProductModalAction: React.FC<Props> = ({
  product,
  open,
  handleClose,
}) => {
  const [value, setValue] = useState<string>();
  const [categori, setCategory] = useState<string[]>([]);
  const { register, handleSubmit, reset } = useForm<IProduct>();
  const selectCate = useAppSelector((state) => state.category.cate);
  const [openPopImgae, setOpenPopImage] = useState<boolean>(false);
  const dispath = useAppDispatch();

  useEffect(() => {
    dispath(getAllCategory());
    reset(product);
    setCategory(product.categories.map((item) => item.categoryId.toString()));
  }, []);

  const handleChange = (event: SelectChangeEvent<typeof categori>) => {
    const value = event.target.value;
    setCategory(typeof value === "string" ? value.split(",") : value);
  };

  const handleOpenPop = () => {
    setOpenPopImage(true);
  };
  const onSubmit: SubmitHandler<IProduct> = async (data: any) => {
    const fdata = new FormData();
    fdata.append("ProductId", product.productId as any);
    fdata.append("ProductName", data.productName);
    fdata.append("Image_Url", data.image_Url[0]);
    fdata.append("quantity", data.quantity);
    fdata.append("priceNew", data.priceNew);
    fdata.append("priceOld", data.priceOld);
    fdata.append("ShortDetails", data.shortDetails);
    fdata.append("ProductDescription", value!);
    for (var i = 0; i < categori.length; i++) {
      var findCate = product.categories.find(item => item.categoryId === Number(categori[i]))
      if(!findCate){
        fdata.append("CategoryId[]", categori[i]);
      }  
    }
    // for (let [key, value] of fdata) {
    //   console.log(`${key}: ${value}`);
    // }

    const res = await dispath(productUpdate(fdata));
    if (productUpdate.fulfilled.match(res)) {
      alert("success", "Lưu sản phẩm thành công");
      await dispath(getProductAll({
        q: "",
        PageIndex: 1,
        PageSize: 20,
      }));
      handleClose();
    } else {
      alert("error", "Lưu sản phẩm thất bại");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      scroll={"body"}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle
          id="scroll-dialog-title"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          Chỉnh sửa sản phẩm
          <Button onClick={handleOpenPop}>Xem tất cả hình ảnh</Button>
        </DialogTitle>
        <DialogContent>
          <Box mt={10} style={{ overflow: "scroll-y" }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={5}
              mt={5}
              gap={10}
            >
              <Input label={"Tên sản phẩm"} {...register("productName")} />
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={5}
              mt={5}
              gap={10}
            >
              <Input label={"Số lượng sản phẩm"} {...register("quantity")} />
              <Input
                label={"Hình ảnh"}
                type="file"
                {...register("image_Url")}
                required={false}
              />
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={5}
              mt={5}
              gap={10}
            >
              <Input label={"Giá cũ"} {...register("priceOld")} />
              <Input label={"Giá mới"} {...register("priceNew")} />
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={5}
              mt={5}
              gap={10}
            >
              <Input label={"Miêu tả ngắn"} {...register("shortDetails")} />
            </Stack>

            <Stack
              direction="column"
              alignItems="flex-start"
              justifyContent="center"
              mb={5}
              mt={5}
              gap={3}
            >
              <Typography color={"grey"} fontWeight={0}>
                Chi tiết sản phẩm
              </Typography>
              <EditorJodit
                value={product.productDescription!}
                setValue={setValue}
              />
            </Stack>
            <Stack
              direction="column"
              alignItems="flex-start"
              justifyContent="center"
              mb={5}
              mt={5}
              gap={3}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Chọn loại sản phẩm
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={categori}
                label="categoryProduct"
                onChange={handleChange}
                fullWidth
                multiple
              >
                {selectCate.map((item, index) => (
                  <MenuItem key={index} value={item.categoryId}>
                    {item.categoryName}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Thoát</Button>
          <Button type="submit">Lưu</Button>
        </DialogActions>
      </form>
      {Object.keys(product).length > 0 && (
        <PoputListImage
          open={openPopImgae}
          handleClose={() => setOpenPopImage(false)}
          productid={product?.productId}
        />
      )}
    </Dialog>
  );
};

export default ProductModalAction;
