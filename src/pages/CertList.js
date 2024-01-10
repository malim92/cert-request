import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { fetchCert } from "../Api/fetchCert";
import { CertColumns } from "./CertColumns";
import Popup from "../componenets/popup";
import { Info } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CertTable = () => {
  const columns = useMemo(() => CertColumns, []);

  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);

  //table state
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 100,
  });

  //custom state
  const [open, setOpen] = useState(false);
  const [Cert, setCert] = useState({});
  const handleOpen = (cert, setCert) => {
    console.log(cert, "in cert:");
    setCert(cert);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetchCert(
      sorting,
      globalFilter,
      columnFilters,
      pagination,
      setData,
      setRowCount,
      setIsError
    );
  }, [
    columnFilters,
    globalFilter,
    pagination.pageIndex,
    pagination.pageSize,
    sorting,
  ]);

  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={data}
        initialState={{ showColumnFilters: true }}
        muiToolbarAlertBannerProps={
          isError
            ? {
                color: "error",
                children: "Error loading data",
              }
            : undefined
        }
        onColumnFiltersChange={setColumnFilters}
        onGlobalFilterChange={setGlobalFilter}
        onPaginationChange={setPagination}
        onSortingChange={setSorting}
        rowCount={rowCount}
        state={{
          columnFilters,
          globalFilter,
          isLoading,
          pagination,
          showAlertBanner: isError,
          showProgressBars: isRefetching,
          sorting,
        }}
        enableRowActions
        renderRowActions={({ row }) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Info
              style={{
                color: "#1f79d5",
                cursor: "pointer",
                fontSize: "35px",
              }}
              onClick={() => handleOpen(row.original, setCert)}
            ></Info>
          </div>
        )}
      />
      <Modal
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography id="modal-modal-title" variant="h6" component="h4">
              Address To :
            </Typography>
            <Typography id="modal-modal-description" sx={{ marginLeft: 2 }}>
              {Cert.address_to}
            </Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography id="modal-modal-title" variant="h6" component="h4">
              Purpose :
            </Typography>
            <Typography id="modal-modal-description" sx={{ marginLeft: 2 }}>
              {Cert.purpose}
            </Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography id="modal-modal-title" variant="h6" component="h4">
              Issued On :
            </Typography>
            <Typography id="modal-modal-description" sx={{ marginLeft: 2 }}>
              {Cert.issued_on}
            </Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography id="modal-modal-title" variant="h6" component="h4">
              Status :
            </Typography>
            <Typography id="modal-modal-description" sx={{ marginLeft: 2 }}>
              {Cert.status}
            </Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography id="modal-modal-description" sx={{ marginLeft: 2 }}>
              {Cert.status == "Done" ? (
                <p>This content is rendered when the condition is true.</p>
              ) : (
                <p>Certificate is yet to be issued</p>
              )}
            </Typography>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default CertTable;
