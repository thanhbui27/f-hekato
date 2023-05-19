import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useMemo } from "react";
import Iconify from "src/admin/components/iconify/Iconify";
import Label from "src/admin/components/label/Label";
import { statusDetails } from "src/admin/utils/formatStatus";

const OrderUser = () => {
    
    // const row = useMemo(() => {
    //     return 
    // })

    const columns : GridColDef[] =  [
        { field: "id", headerName: "Mã hoá đơn", width: 100 },
        {
          field: "order",
          headerName: "Mã đặt hàng",
          flex: 1,
        },
        { field: "quantity", headerName: "Số lượng sản phẩm", flex: 1 },
        { field: "total", headerName: "Tổng tiền", flex: 1 },
        {
          field: "status",
          headerName: "Trạng thái",
          flex: 1,
          renderCell: (params) => {
            return (
              <Label color={statusDetails(params.value).color}>
                {statusDetails(params.value).messager}
              </Label>
            );
          },
        },
        { field: "createAt", headerName: "Thời gian", flex: 1 },
        {
          field: "",
          headerName: "",
          width: 50,
          renderCell: (params) => {
            return (
              <>
                <IconButton
                  size="large"
                  color="inherit"
                //   onClick={(e) => handleOpenMenu(e, params.row.id.split("-"))}
                >
                  <Iconify icon={"eva:more-vertical-fill"} />
                </IconButton>
              </>
            );
          },
        },
      ];

    return (
        <Box>

        </Box>
    )
}

export default OrderUser
