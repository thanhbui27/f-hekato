import { Helmet } from "react-helmet-async";
import { filter } from "lodash";
import { useEffect, useState } from "react";
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from "@mui/material";
// components
import Label from "../components/label";
import Iconify from "../components/iconify";
import Scrollbar from "../components/scrollbar";
// sections
import { UserListHead, UserListToolbar } from "../sections/@dashboard/user";
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
import { IUser } from "src/types/users";
import account from "../_mock/account";
import { alert } from "src/components/Common/Alert";
import { Role } from "src/types/users";
// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "name", label: "Tên", alignRight: false },
  { id: "account", label: "Tài khoản", alignRight: false },
  { id: "phone", label: "Số điện thoại", alignRight: false },
  { id: "email", label: "Email", alignRight: false },
  { id: "role", label: "Role", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "" },
];

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

// ----------------------------------------------------------------------

const descendingComparator = (a: any, b: any, orderBy: any) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order: any, orderBy: any) => {
  return order === "desc"
    ? (a: any, b: any) => descendingComparator(a, b, orderBy)
    : (a: any, b: any) => -descendingComparator(a, b, orderBy);
};

const applySortFilter = (array: IUser[], comparator: any, query: any) => {
  const stabilizedThis = array.map((el: IUser, index: number) => [el, index]);
  stabilizedThis.sort((a: any, b: any) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_user) =>
        _user.fullName.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el: any) => el[0]);
};

export default function UserPage() {
  const dispath = useAppDispatch();
  const {
    allUser: { items, pageIndex, pageSize },
  } = useAppSelector((state) => state.auth);
  const [query, setQuery] = useState<paramProduct>({
    q: "",
    PageIndex: 1,
    PageSize: 10,
  });
  const [open, setOpen] = useState({
    user: {} as IUser,
    isLockUser: false,
    isOpen: false,
    anchorEl: null,
    isAdmin: false,
  });

  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState<string[]>([]);
  const [orderBy, setOrderBy] = useState("fullName");
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    dispath(getAllUser(query));
  }, [query]);

  const handleOpenMenu = (
    event: any,
    user: IUser,
    isLockUser: any,
    isAdmin: any
  ) => {
    setOpen({
      user: user,
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
          lockUser({ id: open.user.id, dateTime: dateString })
        );
        if (lockUser.fulfilled.match(res)) {
          alert("success", res.payload.data?.message);
          await dispath(getAllUser(query));
        } else {
          alert("error", "Có lỗi xảy ra vui lòng thử lại");
        }
        break;
      case EMenu.UNLOCK:
        const resu = await dispath(unlockUser(open.user.id));
        if (unlockUser.fulfilled.match(resu)) {
          alert("success", resu.payload.data?.message);
          await dispath(getAllUser(query));
        } else {
          alert("error", "Có lỗi xảy ra vui lòng thử lại");
        }
        break;
      case EMenu.PERMISION_USER:
        const resd = await dispath(
          decentralization({ id: open.user.id, type: Role.USER })
        );
        if (decentralization.fulfilled.match(resd)) {
          alert("success", resd.payload.data?.message);
          await dispath(getAllUser(query));
        } else {
          alert("error", "Có lỗi xảy ra vui lòng thử lại");
        }
        break;
      case EMenu.PERMISION_ADMIN:
        const resa = await dispath(
          decentralization({ id: open.user.id, type: Role.ADMIN })
        );
        if (decentralization.fulfilled.match(resa)) {
          alert("success", resa.payload.data?.message);
          await dispath(getAllUser(query));
        } else {
          alert("error", "Có lỗi xảy ra vui lòng thử lại");
        }
        break;
      case EMenu.DELETE:
        const resde = await dispath(deleteUser(open.user.id));
        if (deleteUser.fulfilled.match(resde)) {
          alert("success", resde.payload.data?.message);
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
      user: {} as IUser,
      isAdmin: false,
      isLockUser: false,
      isOpen: false,
      anchorEl: null,
    });
  };

  const handleRequestSort = (event: any, property: any) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: any) => {
    if (event.target.checked) {
      const newSelecteds = items.map((n) => n.fullName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: any, name: any) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: any, newPage: any) => {
    setQuery({ ...query, PageIndex: newPage + 1 });
  };

  const handleChangeRowsPerPage = (event: any) => {
    setQuery({ ...query, PageIndex: 1 });
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event: any) => {
    setQuery({ ...query, PageIndex: 1 });
    setFilterName(event.target.value);
  };

  const emptyRows =
    pageIndex > 0
      ? Math.max(0, (1 + pageIndex) * rowsPerPage - items.length)
      : 0;

  const filteredUsers = applySortFilter(
    items,
    getComparator(order, orderBy),
    filterName
  );

  const isNotFound = !filteredUsers.length && !!filterName;

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
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order as "asc" | "desc"}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={items.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers?.map((item: IUser, index: number) => {
                    const selectedUser =
                      selected.indexOf(item?.fullName) !== -1;
                    const isLockUser =
                      new Date(item.lockoutEnd!).getTime() >
                      new Date().getTime();
                    return (
                      <TableRow
                        hover
                        key={index}
                        tabIndex={-1}
                        role="checkbox"
                        selected={selectedUser}
                        sx={{
                          background: isLockUser ? "#e4e4e4" : "#fff",
                        }}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={selectedUser}
                            onChange={(event) =>
                              handleClick(event, item?.fullName)
                            }
                          />
                        </TableCell>

                        <TableCell component="th" scope="row" padding="none">
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={2}
                          >
                            <Avatar
                              alt={item?.fullName}
                              src={account.photoURL}
                            />
                            <Typography variant="subtitle2" noWrap>
                              {item?.fullName}
                            </Typography>
                          </Stack>
                        </TableCell>

                        <TableCell align="left">{item.userName}</TableCell>
                        <TableCell align="left">{item.phoneNumber}</TableCell>
                        <TableCell align="left">{item.email}</TableCell>

                        <TableCell align="left">{item.type}</TableCell>

                        <TableCell align="left">
                          <Label color={(isLockUser && "error") || "success"}>
                            {(isLockUser && "Đang bị khoá") || "Đang hoạt động"}
                          </Label>
                        </TableCell>

                        <TableCell align="right">
                          <IconButton
                            size="large"
                            color="inherit"
                            onClick={(e) =>
                              handleOpenMenu(
                                e,
                                item,
                                isLockUser,
                                item.type === "admin"
                              )
                            }
                          >
                            <Iconify icon={"eva:more-vertical-fill"} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: "center",
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete
                            words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={pageSize}
            rowsPerPage={rowsPerPage}
            page={pageIndex - 1}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
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
