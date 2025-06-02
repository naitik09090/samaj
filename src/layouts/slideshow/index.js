import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// MUI Components
import { IconButton, Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
function Slideshow() {
  const [openUpload, setOpenUpload] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]); // 🆕 Store uploaded images
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpenUpload(true);
  };

  const handleClose = () => {
    setOpenUpload(false);
    setSelectedImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (selectedImage) {
      setUploadedImages((prev) => [...prev, selectedImage]); // Add image to array
      handleClose(); // Close dialog
    }
  };
  const handleView = (item) => {
    console.log("Viewing item:", item);
  };

  const handleEdit = (item) => {
    console.log("Editing item:", item);
  };

  const handleDelete = (item) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      console.log("Deleted:", item);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />

      {/* Posts Display */}
      <Grid container spacing={2} p={2}>
        {/* Static Placeholder Posts */}
        {[...Array(3)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={`static-${index}`}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/300/150"
                alt={`Static Post ${index + 1}`}
              />
              <CardContent>
                <Typography variant="h6">Static Post {index + 1}</Typography>
                <Box>
                  <IconButton color="info" onClick={() => handleView(item)}>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton color="warning" onClick={() => handleEdit(item)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(item)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Uploaded Images as Posts */}
        {uploadedImages.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={`uploaded-${index}`}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={img}
                alt={`Uploaded Image ${index + 1}`}
              />
              <CardContent>
                <Typography variant="h6">Uploaded Image {index + 1}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Insert Button */}
      <Grid container justifyContent="center" p={2}>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Insert
        </Button>
      </Grid>

      {/* Image Upload Dialog */}
      <Dialog open={openUpload} onClose={handleClose}>
        <DialogTitle>Upload Image</DialogTitle>
        <DialogContent>
          <Button variant="outlined" component="label" fullWidth color="primary">
            Choose Image
            <input type="file" accept="image/*" hidden onChange={handleImageChange} />
          </Button>

          {selectedImage && (
            <img
              src={selectedImage}
              alt="Preview"
              style={{ marginTop: 20, width: "100%", borderRadius: 8 }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleUpload}>
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
}

export default Slideshow;
