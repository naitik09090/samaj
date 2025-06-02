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
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
function MediaPost() {
  const [openUpload, setOpenUpload] = useState(false);
  const [mediaList, setMediaList] = useState([]); // Store multiple posts
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null); // "image" or "video"
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpenUpload(true);
  };

  const handleClose = () => {
    setOpenUpload(false);
    setSelectedMedia(null);
    setMediaType(null);
  };

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const isVideo = file.type.startsWith("video/");
      setSelectedMedia(url);
      setMediaType(isVideo ? "video" : "image");
    }
  };

  const handleUpload = () => {
    if (selectedMedia && mediaType) {
      setMediaList([...mediaList, { url: selectedMedia, type: mediaType }]);
      handleClose();
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
        {mediaList.map((media, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              {media.type === "image" ? (
                <CardMedia
                  component="img"
                  height="140"
                  image={media.url}
                  alt={`Post ${index + 1}`}
                />
              ) : (
                <CardMedia component="video" height="140" src={media.url} controls />
              )}
              <CardContent>
                <Typography variant="h6">Post {index + 1}</Typography>
              </CardContent>
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
      </Grid>

      {/* Insert Button */}
      <Grid container justifyContent="left" p={2}>
        <Button
          variant="contained"
          color="black"
          sx={{ backgroundColor: theme.palette.primary.dark }}
          onClick={handleClickOpen}
        >
          Insert Image/Video
        </Button>
      </Grid>

      {/* Upload Dialog */}
      <Dialog open={openUpload} onClose={handleClose}>
        <DialogTitle>Upload Image or Video</DialogTitle>
        <DialogContent>
          <Button variant="outlined" component="label" fullWidth sx={{ my: 2 }}>
            Choose File
            <input type="file" accept="image/*,video/*" hidden onChange={handleMediaChange} />
          </Button>

          {selectedMedia && (
            <Box display="flex" justifyContent="center" my={2}>
              {mediaType === "image" ? (
                <img
                  src={selectedMedia}
                  alt="Preview"
                  style={{
                    width: "100%",
                    maxWidth: 500,
                    borderRadius: 8,
                  }}
                />
              ) : (
                <video
                  controls
                  src={selectedMedia}
                  style={{
                    width: "100%",
                    maxWidth: 500,
                    borderRadius: 8,
                  }}
                />
              )}
            </Box>
          )}
        </DialogContent>

        <DialogActions>
          <Box display="flex" justifyContent="center" width="100%" gap={2} p={1}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" color="primary" onClick={handleUpload}>
              Upload
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
}

export default MediaPost;
