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
import { getProductAll, productCreate } from "src/store/product/slice";
import { alert } from "src/components/Common/Alert";

interface Props {
  open: boolean;
  handleClose: () => void;
}

export interface IProduct {
  ProductName: string;
  Image_Url: File;
  quantity: number;
  priceNew: number;
  priceOld: number;
  ShortDetails: string;
  ProductDescription: string;
  categories: number[];
}

export const ProductModal: React.FC<Props> = ({ open, handleClose }) => {
  const [value, setValue] = useState<string>();
  const [categori, setCategory] = useState<string[]>([]);
  const { register, handleSubmit } = useForm<IProduct>();
  const selectCate = useAppSelector((state) => state.category.cate);
  const dispath = useAppDispatch();

  useEffect(() => {
    dispath(getAllCategory());
  }, []);

  const handleChange = (event: SelectChangeEvent<typeof categori>) => {
    const value = event.target.value;
    setCategory(typeof value === "string" ? value.split(",") : value);
  };

  const onSubmit: SubmitHandler<IProduct> = async (data: any) => {
    const fdata = new FormData();
    fdata.append("ProductName", data.ProductName);
    fdata.append("Image_Url", data.Image_Url[0]);
    fdata.append("quantity", data.quantity);
    fdata.append("priceNew", data.priceNew);
    fdata.append("priceOld", data.priceOld);
    fdata.append("ShortDetails", data.ShortDetails);
    fdata.append("ProductDescription", value!);
    for (var i = 0; i < categori.length; i++) {
      fdata.append("categories[]", categori[i]);
    }
    const res = await dispath(productCreate(fdata));
    if (productCreate.fulfilled.match(res)) {
      alert("success", "Thêm sản phẩm thành công");
      handleClose();
      await dispath(getProductAll({
        q: "",
        PageIndex: 1,
        PageSize: 20,
      }));
    } else {
      alert("error", "Thêm sản phẩm mới thất bại");
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
        <DialogTitle id="scroll-dialog-title">Thêm mới sản phẩm</DialogTitle>
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
              <Input label={"Tên sản phẩm"} {...register("ProductName")} />
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
                {...register("Image_Url")}
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
              <Input label={"Miêu tả ngắn"} {...register("ShortDetails")} />
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
              <EditorJodit value={value!} setValue={setValue} />
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
          <Button type="submit">Thêm mới</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
