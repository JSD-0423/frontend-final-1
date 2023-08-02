import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { CartOrders } from "./index";

const OrdersTable = () => {
  return (
    <Table sx={{ minWidth: 650, width: "60%" }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell
            sx={{
              padding: "0 0 8px 0",
              color: "typeLowEmphasis.main",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            Product Name
          </TableCell>
          <TableCell
            sx={{
              padding: "0",
              color: "typeLowEmphasis.main",
              fontSize: "16px",
              fontWeight: 500,
            }}
            align="right"
          >
            Price
          </TableCell>
          <TableCell
            sx={{
              padding: "0",
              color: "typeLowEmphasis.main",
              fontSize: "16px",
              fontWeight: 500,
            }}
            align="right"
          >
            Qty
          </TableCell>
          <TableCell
            sx={{
              padding: "0",
              color: "typeLowEmphasis.main",
              fontSize: "16px",
              fontWeight: 500,
            }}
            align="right"
          >
            Subtotal
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
            marginTop: "24px",
            borderBottom: "none",
          }}
        >
          <TableCell component="th" scope="row" sx={{ padding: "0" }}>
            <CartOrders />
          </TableCell>
          <TableCell align="right" sx={{ padding: "0" }}>
            $54.96
          </TableCell>
          <TableCell align="right" sx={{ padding: "0" }}>
            1
          </TableCell>
          <TableCell
            align="right"
            sx={{
              flexDirection: "column",
              padding: "0px",
            }}
          >
            <Box>
              <Typography>$54.96</Typography>
              <Typography
                sx={{
                  color: "error.main",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "underline",
                  marginRight: "10px",
                }}
              >
                Remove
              </Typography>
            </Box>
          </TableCell>
        </TableRow>
        <TableRow
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
            marginTop: "24px",
          }}
        >
          <TableCell component="th" scope="row" sx={{ padding: "0" }}>
            <CartOrders />
          </TableCell>
          <TableCell align="right" sx={{ padding: "0" }}>
            $54.96
          </TableCell>
          <TableCell align="right" sx={{ padding: "0" }}>
            1
          </TableCell>
          <TableCell
            align="right"
            sx={{
              flexDirection: "column",
              padding: "0px",
            }}
          >
            <Typography>$54.96</Typography>
            <Typography
              sx={{
                color: "error.main",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "underline",
                marginRight: "10px",
              }}
            >
              Remove
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default OrdersTable;
