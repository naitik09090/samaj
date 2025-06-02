// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

function Sanstha() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    sansthaName: "",
    media: [],
    address: "",
    latitude: "",
    longitude: "",
    contactInfo: "",
    contactPersonName: "",
    contactPersonInfo: "",
    instagram: "",
    facebook: "",
    category: "",
  });

  const [tableRows, setTableRows] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const fileArray = Array.from(files);
      setFormData((prev) => ({ ...prev, [name]: fileArray }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    const newRow = {
      sanstha: formData.sansthaName,
      address: formData.address,
      contact: `${formData.contactPersonName} (${formData.contactInfo})`,
      category: formData.category,
      action: (
        <>
          <Tooltip title="View">
            <IconButton color="primary">
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton color="secondary">
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton color="error">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </>
      ),
    };

    setTableRows((prev) => [...prev, newRow]);

    setFormData({
      sansthaName: "",
      media: [],
      address: "",
      latitude: "",
      longitude: "",
      contactInfo: "",
      contactPersonName: "",
      contactPersonInfo: "",
      instagram: "",
      facebook: "",
      category: "",
    });

    setOpen(false);
  };

  const columns = [
    { Header: "Sanstha", accessor: "sanstha" },
    { Header: "Address", accessor: "address" },
    { Header: "Contact", accessor: "contact" },
    { Header: "Category", accessor: "category" },
    { Header: "Action", accessor: "action", align: "center" },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <MDTypography variant="h6" color="white">
                  Table View
                </MDTypography>
                <Button variant="contained" color="white" onClick={() => setOpen(true)}>
                  Add Sanstha
                </Button>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows: tableRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>

      {/* Dialog Form */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Add New Sanstha</DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{ borderBottom: "2px solid #ccc" }}
              >
                Basic Information
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Sanstha Name"
                name="sansthaName"
                value={formData.sansthaName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                accept="image/*,video/*"
                type="file"
                name="media"
                onChange={handleChange}
                multiple
                style={{ marginTop: "16px" }}
              />
              {formData.media.length > 0 && (
                <Grid container spacing={2} mt={1}>
                  {formData.media.map((file, index) => (
                    <Grid item xs={6} sm={4} key={index}>
                      {file.type.startsWith("image/") ? (
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`upload-${index}`}
                          style={{
                            width: "100%",
                            height: "150px",
                            objectFit: "cover",
                            borderRadius: 8,
                          }}
                        />
                      ) : (
                        <video
                          src={URL.createObjectURL(file)}
                          controls
                          style={{ width: "100%", height: "150px", borderRadius: 8 }}
                        />
                      )}
                    </Grid>
                  ))}
                </Grid>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{ borderBottom: "2px solid #ccc" }}
              >
                Map
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Latitude"
                name="latitude"
                value={formData.latitude}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Longitude"
                name="longitude"
                value={formData.longitude}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{ borderBottom: "2px solid #ccc" }}
              >
                Contact Details
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Contact Info"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Contact Person Name"
                name="contactPersonName"
                value={formData.contactPersonName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Contact Person Info"
                name="contactPersonInfo"
                value={formData.contactPersonInfo}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{ borderBottom: "2px solid #ccc" }}
              >
                Social & Category
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Facebook"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="error">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
}

export default Sanstha;
