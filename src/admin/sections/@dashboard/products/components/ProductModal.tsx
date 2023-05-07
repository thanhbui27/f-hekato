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
import { useState } from "react";

interface Props {
  open: boolean;
  handleClose: () => void;
}
const OPTIONS = [
  { value: "1", label: "Đồ da dụng" },
  { value: "2", label: "Giày cao cấp" },
  { value: "3", label: "Đồ công nghệ" },
  { value: "4", label: "Bàn ghế cao cấp" },
];
export const ProductModal: React.FC<Props> = ({ open, handleClose }) => {
  const [value, setValue] = useState<string>();
  const [categori, setCategory] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
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
      <DialogTitle id="scroll-dialog-title">Thêm mới sản phẩm</DialogTitle>
      <DialogContent>
        <Box  mt={10} style={{ overflow: "scroll-y" }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={5}
              mt={5}
              gap={10}
            >
              <Input label={"Tên sản phẩm"} />
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={5}
              mt={5}
              gap={10}
            >
              <Input label={"Số lượng sản phẩm"} />
              <Input label={"Hình ảnh"} type="file" />
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={5}
              mt={5}
              gap={10}
            >
              <Input label={"Giá cũ"} />
              <Input label={"Giá mới"} />
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={5}
              mt={5}
              gap={10}
            >
              <Input label={"Miêu tả ngắn"} />
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
                Chi tiết sản phẩm
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={categori}
                label="categoryProduct"
                onChange={handleChange}
                fullWidth
              >
                {OPTIONS.map((item, index) => (
                  <MenuItem key={index} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
        </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Thoát</Button>
          <Button onClick={handleClose}>Thêm mới</Button>
        </DialogActions>
    </Dialog>
  );
};
