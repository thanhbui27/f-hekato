import {
  Avatar,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useAppSelector } from "src/hooks/useAppSelector";
import { Container, StyledAccount } from "./styles";
import account from "src/admin/_mock/account";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Iconify from "src/admin/components/iconify/Iconify";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { getMe, updateInfoUser, uploadImage } from "src/store/auth/slice";
import { alert } from "src/components/Common/Alert";
import { getImage } from "src/constants/URLImage";

export interface UserForm {
  uid: string;
  fullName: string;
  address: string;
  cmnd: string;
  phoneNumber: string;
  email: string;
  dob: string;
}

const MyAccount = () => {
  const { me } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [image, setImage] = useState<string>(me?.picture!);
  const [value, setValue] = useState<Dayjs | null>(
    me?.dob ? dayjs(me?.dob) : dayjs("1/1/2000")
  );
  const { register, handleSubmit } = useForm<UserForm>();

  const onSubmit: SubmitHandler<UserForm> = async (data: UserForm) => {
    if(data){
      const res = await dispatch(updateInfoUser({
        ...data,
        uid: me?.id!,
        dob: dayjs(value).format("YYYY-MM-DD"),
      }))
      if(updateInfoUser.fulfilled.match(res)){
        dispatch(getMe())
        alert("success", "Cập nhật thông tin thành công");
      } else {
        alert("error", "Cập nhật thông tin thất bại");
      }
    }
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const fdata = new FormData();
    fdata.append(`image`, event.target.files[0]);
    // for (let [key, value] of fdata.entries()) {
    //     console.log(value);
    // }
    const res = await dispatch(uploadImage({ id: me?.id!, image: fdata }));
    if (uploadImage.fulfilled.match(res)) {
      setImage(res.payload.data.data);
      alert("success", "Thêm ảnh thành công");
    } else {
      alert("error", "Thêm ảnh Thất bại");
    }
    event.target.files = null;
  };
  return (
    <Container>
      <Box sx={{ mb: 5, borderBottom: "1px solid #9098" }}>
        <StyledAccount>
          <Box sx={{ position: "relative" }}>
            <Avatar
              src={image ? getImage(image) : account.photoURL}
              alt="photoURL"
              sx={{ height: "70px", width: "70px", position: "relative" }}
            />
            <input
              type="file"
              id="upload"
              style={{ display: "none" }}
              accept=".jpg, .jpeg, .png"
              onChange={handleChange}
              multiple
            />
            <label
              htmlFor="upload"
              style={{
                cursor: "pointer",
                position: "absolute",
                right: 0,
                bottom: 0,
              }}
            >
              <Iconify icon={"bx:camera"} />
            </label>
          </Box>

          <Box sx={{ ml: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ color: "text.primary", fontWeight: 800 }}
            >
              {me?.fullName}
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {me?.type}
            </Typography>
          </Box>
        </StyledAccount>
      </Box>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="row" spacing={2}>
            <TextField
              id="outlined-multiline-flexible"
              label="Họ và tên"
              defaultValue={me?.fullName}
              {...register("fullName")}
              fullWidth
              required
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Email"
              defaultValue={me?.email}
              {...register("email")}
              fullWidth
              required
            />
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <TextField
              id="outlined-multiline-flexible"
              label="Địa chỉ"
              defaultValue={me?.address}
              {...register("address")}
              fullWidth
              required
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Số điện thoại"
              {...register("phoneNumber")}
              defaultValue={me?.phoneNumber}
              fullWidth
              required
            />
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <DatePicker
              label="Ngày sinh"
              value={value}
              format="YYYY-MM-DD"
              onChange={(newValue) => setValue(newValue)}
              sx={{
                width: "100%",
              }}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="CMND"
              defaultValue={me?.cmnd}
              {...register("cmnd")}
              fullWidth
            />
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <TextField
              id="outlined-multiline-flexible"
              label="Tài khoản đăng nhập"
              name="userName"
              defaultValue={me?.userName}
              disabled
              fullWidth
            />
            {me?.passwordHash && (
              <Button variant="contained">Đổi mật khẩu</Button>
            )}
          </Stack>
          <Stack
            sx={{ justifyContent: "flex-end" }}
            direction="row"
            spacing={2}
            mt={2}
          >
            <Button variant="contained" type="submit">
              Lưu
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default MyAccount;
