import React, { useState } from "react";
import {
  Card,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function News() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "First Blog",
      content: "This is a sample blog post.",
      image: "https://picsum.photos/300/150",
    },
    {
      id: 2,
      title: "Second Blog",
      content: "Content of the second blog post.",
      image: "https://picsum.photos/300/150",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [newBlog, setNewBlog] = useState({ title: "", content: "", image: null, imagePreview: "" });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length > 0) {
      const file = files[0];
      const previewUrl = URL.createObjectURL(file);
      setNewBlog((prev) => ({
        ...prev,
        image: file,
        imagePreview: previewUrl,
      }));
    } else {
      setNewBlog((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    if (editId !== null) {
      // Edit mode
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog.id === editId
            ? {
                ...blog,
                title: newBlog.title,
                content: newBlog.content,
                image: newBlog.imagePreview || blog.image,
              }
            : blog
        )
      );
    } else {
      // Create mode
      const newEntry = {
        id: Date.now(),
        title: newBlog.title,
        content: newBlog.content,
        image: newBlog.imagePreview || "https://via.placeholder.com/300x150", // fallback
      };
      setBlogs([...blogs, newEntry]);
    }

    // Reset form
    setNewBlog({ title: "", content: "", image: null, imagePreview: "" });
    setEditId(null);
    setOpen(false);
  };

  const handleEdit = (blog) => {
    setNewBlog({ title: blog.title, content: blog.content, image: null, imagePreview: blog.image });
    setEditId(blog.id);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <Grid container spacing={2} padding={3}>
        {blogs.map((blog) => (
          <Grid item xs={12} md={4} key={blog.id} sx={{ mt: 4 }}>
            <Card>
              <CardMedia component="img" height="150" image={blog.image} alt={blog.title} />
              <CardContent>
                <Typography variant="h6">{blog.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.content}
                </Typography>
              </CardContent>
              <Grid container justifyContent="flex-end" paddingX={1} paddingBottom={1}>
                <IconButton onClick={() => handleEdit(blog)} color="primary">
                  <Edit />
                </IconButton>
                <IconButton onClick={() => handleDelete(blog.id)} color="error">
                  <Delete />
                </IconButton>
              </Grid>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12} display="flex" justifyContent="flex-start" mt={2}>
          <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
            Create New Blog
          </Button>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>{editId ? "Edit Blog" : "Create Blog"}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="title"
            label="Blog Title"
            fullWidth
            value={newBlog.title}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="content"
            label="Blog Content"
            fullWidth
            multiline
            rows={4}
            value={newBlog.content}
            onChange={handleChange}
          />

          <label style={{ display: "block", marginTop: "16px", fontWeight: "bold" }}>
            Upload Image:
          </label>
          <input type="file" name="image" accept="image/*" onChange={handleChange} />

          {newBlog.imagePreview && (
            <CardMedia
              component="img"
              height="150"
              image={newBlog.imagePreview}
              alt="Preview"
              sx={{ mt: 2 }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {editId ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
}

export default News;
