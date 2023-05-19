import { alpha, styled } from "@mui/material";

export const Container = styled("div")(({theme} )=> ({
    padding: theme.spacing(0, 2.5),
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    backgroundColor: alpha(theme.palette.common.white, 0.12),
}))

export const StyledAccount = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1.5, 0),
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    backgroundColor: alpha(theme.palette.common.white, 0.12),
  }));

