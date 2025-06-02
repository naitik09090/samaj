/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function data() {
  const SansthaName = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  const handleView = (entry) => {
    console.log("Viewing:", entry);
  };

  const handleEdit = (entry) => {
    console.log("Editing:", entry);
  };

  const handleDelete = (entry) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      console.log("Deleting:", entry);
      // Add deletion logic here
    }
  };

  const createRow = (entry) => ({
    author: <SansthaName image={entry.image} name={entry.name} email={entry.email} />,
    function: <Job title={entry.title} description={entry.description} />,
    status: <Job title={entry.address} />,
    employed: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        {entry.contact}
      </MDTypography>
    ),
    action: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        {entry.contactPerson}
      </MDTypography>
    ),
    actions: (
      <MDBox display="flex" gap={1}>
        <MDTypography
          component="a"
          href="#"
          color="info"
          fontSize="small"
          onClick={() => handleView(entry)}
          sx={{ cursor: "pointer" }}
        >
          <VisibilityIcon fontSize="small" />
        </MDTypography>
        <MDTypography
          component="a"
          href="#"
          color="warning"
          fontSize="small"
          onClick={() => handleEdit(entry)}
          sx={{ cursor: "pointer" }}
        >
          <EditIcon fontSize="small" />
        </MDTypography>
        <MDTypography
          component="a"
          href="#"
          color="error"
          fontSize="small"
          onClick={() => handleDelete(entry)}
          sx={{ cursor: "pointer" }}
        >
          <DeleteIcon fontSize="small" />
        </MDTypography>
      </MDBox>
    ),
  });

  const entries = [
    {
      image: team2,
      name: "Mogal",
      email: "mogal@example.com",
      title: "Manager",
      description: "Organization",
      address: "Surat",
      contact: "23/04/18",
      contactPerson: "bhaveshbhai",
    },
    {
      image: team3,
      name: "Umiya",
      email: "umiya@example.com",
      title: "Programator",
      description: "Developer",
      address: "Bharuch",
      contact: "11/01/19",
      contactPerson: "pareshbhai",
    },
    {
      image: team3,
      name: "Khodal",
      email: "khodal@example.com",
      title: "Programator",
      description: "Developer",
      address: "Pasodara",
      contact: "24/12/08",
      contactPerson: "mohanbhai",
    },
    {
      image: team3,
      name: "Ambika",
      email: "ambika@example.com",
      title: "Manager",
      description: "Executive",
      address: "Bhavnagar",
      contact: "04/10/21",
      contactPerson: "rameshbhai",
    },
    {
      image: team4,
      name: "Ganesh",
      email: "ganesh@example.com",
      title: "Programator",
      description: "Developer",
      address: "Pal",
      contact: "14/09/20",
      contactPerson: "maheshbhai",
    },
  ];

  return {
    columns: [
      { Header: "Sanstha name", accessor: "author", width: "45%", align: "left" },
      { Header: "image/video", accessor: "function", align: "left" },
      { Header: "Address", accessor: "status", align: "center" },
      { Header: "contact info", accessor: "employed", align: "center" },
      { Header: "contact person name", accessor: "action", align: "center" },
      { Header: "Action", accessor: "actions", align: "center" },
    ],
    rows: entries.map((entry) => createRow(entry)),
  };
}
