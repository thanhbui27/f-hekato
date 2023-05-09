import {
  Dialog,
  DialogContent,
  DialogTitle,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { useEffect } from "react";
import { FileUpload } from "src/admin/components/file-Upload/uploadFile";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { useAppSelector } from "src/hooks/useAppSelector";
import { url } from "src/services/request";
import { getAllProductImage } from "src/store/product/slice";

interface Props {
  open: boolean;
  handleClose: () => void;
  productid : number
}

const PoputListImage: React.FC<Props> = ({ open, handleClose, productid }) => {
  const dispatch = useAppDispatch();
  const list_image = useAppSelector((state) => state.product.list_image);

  useEffect(() => {
    dispatch(getAllProductImage(productid))
  },[])

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
      <DialogTitle
        id="scroll-dialog-title"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        Danh sách hình ảnh
        <FileUpload id={list_image.length > 0 ? list_image[0].productId : 0 } />
      </DialogTitle>
      {list_image.length > 0 && (
        <DialogContent>
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {list_image.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={`${url}Resources${item.url_image}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${url}Resources${item.url_image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.url_image}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default PoputListImage;
