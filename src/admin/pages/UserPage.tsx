import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
// @mui
import {
  Card,
  Avatar,
  Button,
  Popover,
  MenuItem,
  Container,
  Typography,
  IconButton,
  Box,
  Stack,
} from "@mui/material";
// components
import Label from "../components/label";
import Iconify from "../components/iconify";
// mock
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { useAppSelector } from "src/hooks/useAppSelector";
import { paramProduct } from "src/services/api/product/types";
import {
  decentralization,
  deleteUser,
  getAllUser,
  lockUser,
  unlockUser,
} from "src/store/auth/slice";
import account from "../_mock/account";
import { alert } from "src/components/Common/Alert";
import { Role } from "src/types/users";
import Pagination from "src/components/Common/Pagination";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { UserListToolbar } from "../sections/@dashboard/user";
import Loading from "src/components/Common/Loading";
// ----------------------------------------------------------------------

enum EMenu {
  LOCK = "lock",
  UNLOCK = "unlock",
  PERMISION_ADMIN = "admin",
  PERMISION_USER = "user",
  DELETE = "delete",
}

const menu_aciton_table = [
  {
    icon: "eva:lock-fill",
    key: EMenu.LOCK,
    label: "Khoá tài khoản",
    isDelete: false,
  },
  {
    icon: "eva:unlock-fill",
    key: EMenu.UNLOCK,
    label: "Mở khoá tài khoản",
    isDelete: false,
  },
  {
    icon: "mdi:account-key",
    key: EMenu.PERMISION_ADMIN,
    label: "Phân quyền admin",
    isDelete: false,
  },
  {
    icon: "mdi:account-key",
    key: EMenu.PERMISION_USER,
    label: "Hạ quyền user",
    isDelete: false,
  },
  {
    icon: "eva:trash-2-outline",
    key: EMenu.DELETE,
    label: "Delete",
    isDelete: true,
  },
];

export default function UserPage() {
  const dispath = useAppDispatch();
  const {
    allUser: { items, pageIndex, totalRecords, pageCount, pageSize },
  } = useAppSelector((state) => state.auth);

  const [query, setQuery] = useState<paramProduct>({
    q: "",
    PageIndex: 1,
    PageSize: 10,
  });
  
  const [open, setOpen] = useState({
    id: "",
    isLockUser: false,
    isOpen: false,
    anchorEl: null,
    isAdmin: false,
  });
  const [filterName, setFilterName] = useState("");
  useEffect(() => {
    dispath(getAllUser(query));
  }, [query]);

  const handleOpenMenu = (
    event: any,
    id: string,
    isLockUser: any,
    isAdmin: any
  ) => {
    setOpen({
      id: id,
      isLockUser: isLockUser,
      isAdmin: isAdmin,
      isOpen: true,
      anchorEl: event.currentTarget,
    });
  };

  const handleMenuPopup = async (key: string) => {
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 7);
    var dateString = currentDate.toDateString();

    switch (key) {
      case EMenu.LOCK:
        const res = await dispath(
          lockUser({ id: open.id, dateTime: dateString })
        );
        if (lockUser.fulfilled.match(res)) {
          alert("success", res.payload.data?.message);
          handleCloseMenu();
          await dispath(getAllUser(query));
        } else {
          alert("error", "Có lỗi xảy ra vui lòng thử lại");
        }
        break;
      case EMenu.UNLOCK:
        const resu = await dispath(unlockUser(open.id));
        if (unlockUser.fulfilled.match(resu)) {
          alert("success", resu.payload.data?.message);
          await dispath(getAllUser(query));
          handleCloseMenu();
        } else {
          alert("error", "Có lỗi xảy ra vui lòng thử lại");
        }
        break;
      case EMenu.PERMISION_USER:
        const resd = await dispath(
          decentralization({ id: open.id, type: Role.USER })
        );
        if (decentralization.fulfilled.match(resd)) {
          alert("success", resd.payload.data?.message);
          handleCloseMenu();
          await dispath(getAllUser(query));
        } else {
          alert("error", "Có lỗi xảy ra vui lòng thử lại");
        }
        break;
      case EMenu.PERMISION_ADMIN:
        const resa = await dispath(
          decentralization({ id: open.id, type: Role.ADMIN })
        );
        if (decentralization.fulfilled.match(resa)) {
          alert("success", resa.payload.data?.message);
          handleCloseMenu();
          await dispath(getAllUser(query));
        } else {
          alert("error", "Có lỗi xảy ra vui lòng thử lại");
        }
        break;
      case EMenu.DELETE:
        const resde = await dispath(deleteUser(open.id));
        if (deleteUser.fulfilled.match(resde)) {
          alert("success", resde.payload.data?.message);
          handleCloseMenu();
          await dispath(getAllUser(query));
        } else {
          alert("error", "Có lỗi xảy ra vui lòng thử lại");
        }
        break;
      default:
        break;
    }
  };

  const handleCloseMenu = () => {
    setOpen({
      id: "",
      isAdmin: false,
      isLockUser: false,
      isOpen: false,
      anchorEl: null,
    });
  };

  const handleOnChangePage = (value: any) => {
    setQuery({ ...query, PageIndex: value });
  };

  const handleFilterByName = (event: any) => {
    setQuery({ ...query, q: event.target.value });
    setFilterName(event.target.value);
  };

  const rows  = items.map((item, index) => {
    return {
      id: item.id,
      fullName: item.fullName,
      phoneNumber: item.phoneNumber,
      email: item.email,
      role: item.type,
      status: item.lockoutEnd,
    };
  })

  const columns: GridColDef[] = [
    { field: "id", headerName: "#", width: 230 },
    {
      field: "fullName",
      headerName: "Tên khách hàng",
      flex: 1,
      renderCell: (params) => {
        return (
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={params.value} src={account.photoURL} />
            <Typography variant="subtitle2" noWrap>
              {params.value}
            </Typography>
          </Stack>
        );
      },
    },
    { field: "phoneNumber", headerName: "Số điện thoại", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    {
      field: "status",
      headerName: "Trạng thái",
      flex: 1,
      renderCell: (params) => {
        const isLockUser =
          new Date(params.row.status).getTime() > new Date().getTime();
        return (
          <Label color={(isLockUser && "error") || "success"}>
            {(isLockUser && "Đang bị khoá") || "Đang hoạt động"}
          </Label>
        );
      },
    },
    {
      field: "",
      headerName: "",
      width: 50,
      renderCell: (params) => {
        const isLockUser =
          new Date(params.row.status).getTime() > new Date().getTime();
        return (
          <>
            <IconButton
              size="large"
              color="inherit"
              onClick={(e) =>
                handleOpenMenu(
                  e,
                  params.row.id,
                  isLockUser,
                  params.row.role === "admin"
                )
              }
            >
              <Iconify icon={"eva:more-vertical-fill"} />
            </IconButton>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            User
          </Typography>
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New User
          </Button>
        </Stack>

        <Card>
          <UserListToolbar
            numSelected={0}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />
          {items.length > 0  ? (
            <DataGrid rows={rows} columns={columns} />
          ) : (
            <Loading />
          )}

          <Box
            mt={5}
            mb={5}
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
        </Card>
      </Container>
      <Popover
        open={open.isOpen}
        anchorEl={open.anchorEl}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            width: 240,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        {menu_aciton_table.map((item, index) =>
          (item.key === EMenu.LOCK && open.isLockUser) ||
          (item.key === EMenu.PERMISION_ADMIN && open.isAdmin) ||
          (item.key === EMenu.PERMISION_USER && !open.isAdmin) ||
          (item.key === EMenu.UNLOCK && !open.isLockUser) ? (
            ""
          ) : (
            <MenuItem
              key={index}
              sx={{ color: item.isDelete ? "error.main" : "" }}
              onClick={() => handleMenuPopup(item.key)}
            >
              <Iconify icon={item.icon} sx={{ mr: 2 }} />
              {item.label}
            </MenuItem>
          )
        )}
      </Popover>
    </>
  );
}
