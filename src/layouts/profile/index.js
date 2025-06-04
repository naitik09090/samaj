import React, { useState } from "react";
import { Card, Grid, Avatar, TextField, Typography, Button, Divider } from "@mui/material";

// Material Dashboard 2 components
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";

function Overview() {
  const [profile, setProfile] = useState({
    name: "Admin Name",
    email: "admin@example.com",
    role: "Administrator",
    phone: "1234567890",
    image: "",
  });

  const [editMode, setEditMode] = useState(false);
  const [passwordData, setPasswordData] = useState({
    current: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setProfile({ ...profile, image: imageUrl });
  };

  const handleSave = () => {
    setEditMode(false);
    console.log("Profile updated:", profile);
  };

  const handlePasswordSubmit = () => {
    console.log("Password change request:", passwordData);
    setPasswordData({ current: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ padding: 3 }}>
              <Grid container direction="column" alignItems="center">
                <Avatar alt="Admin" src={profile.image} sx={{ width: 120, height: 120, mb: 2 }} />
                <Button variant="outlined" component="label" size="small">
                  Upload
                  <input type="file" hidden onChange={handleImageUpload} />
                </Button>
              </Grid>
              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle1" gutterBottom>
                Name: {profile.name}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Email: {profile.email}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Role: {profile.role}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Phone: {profile.phone}
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Card sx={{ padding: 3 }}>
              <Typography variant="h6" mb={2}>
                {editMode ? "Edit Profile" : "Profile Details"}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                    disabled={!editMode}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    disabled={!editMode}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Role"
                    name="role"
                    value={profile.role}
                    onChange={handleInputChange}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={profile.phone}
                    onChange={handleInputChange}
                    disabled={!editMode}
                  />
                </Grid>
              </Grid>
              <MDBox mt={3}>
                {editMode ? (
                  <Button variant="contained" onClick={handleSave}>
                    Save Changes
                  </Button>
                ) : (
                  <Button variant="outlined" onClick={() => setEditMode(true)}>
                    Edit Profile
                  </Button>
                )}
              </MDBox>
            </Card>

            <Card sx={{ padding: 3, marginTop: 4 }}>
              <Typography variant="h6" mb={2}>
                Change Password
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    type="password"
                    label="Current Password"
                    name="current"
                    value={passwordData.current}
                    onChange={handlePasswordChange}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    type="password"
                    label="New Password"
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    type="password"
                    label="Confirm Password"
                    name="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                  />
                </Grid>
              </Grid>
              <MDBox mt={3}>
                <Button variant="contained" onClick={handlePasswordSubmit}>
                  Update Password
                </Button>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Overview;
