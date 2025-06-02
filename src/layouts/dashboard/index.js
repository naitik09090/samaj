import React from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";

// Material Dashboard 2 React components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";

// Sample data
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        {/* Top 3 summary row 1 */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <ComplexStatisticsCard
              color="primary"
              icon="groups"
              title="Total Members"
              count={1250}
              percentage={{ color: "success", amount: "+5%", label: "this month" }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ComplexStatisticsCard
              color="success"
              icon="person"
              title="Active Members"
              count={860}
              percentage={{ color: "info", amount: "+8%", label: "currently online" }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ComplexStatisticsCard
              color="info"
              icon="event"
              title="Total Events"
              count={48}
              percentage={{ color: "warning", amount: "", label: "all time" }}
            />
          </Grid>
        </Grid>

        {/* Row 2 */}
        <MDBox mt={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <ComplexStatisticsCard
                color="dark"
                icon="article"
                title="Total Blogs"
                count={87}
                percentage={{ color: "info", amount: "+3%", label: "last 7 days" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <ComplexStatisticsCard
                color="secondary"
                icon="paid"
                title="Total Donation"
                count="₹1.5L"
                percentage={{ color: "success", amount: "+12%", label: "this year" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <ComplexStatisticsCard
                color="warning"
                icon="photo_library"
                title="Media Uploads"
                count={342}
                percentage={{ color: "error", amount: "-1%", label: "compared to last month" }}
              />
            </Grid>
          </Grid>
        </MDBox>

        {/* Charts Section */}
        <MDBox mt={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <ReportsLineChart
                color="success"
                title="Member Growth"
                description="Monthly member registration"
                date="updated recently"
                chart={sales}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ReportsBarChart
                color="info"
                title="Event Attendance"
                description="Attendance across past events"
                date="updated yesterday"
                chart={reportsBarChartData}
              />
            </Grid>
          </Grid>
        </MDBox>

        {/* Events and Activity */}
        <MDBox mt={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <ComplexStatisticsCard
                color="primary"
                icon="event_available"
                title="Upcoming Events"
                count="5"
                percentage={{ color: "info", amount: "", label: "in next 30 days" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ComplexStatisticsCard
                color="dark"
                icon="notifications"
                title="Recent Activities"
                count="12"
                percentage={{ color: "success", amount: "+20%", label: "this week" }}
              />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
