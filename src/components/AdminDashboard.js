import React from "react";
import CollectionsPage from "./CollectionsPage";
import Footer from "./Footer";
import AdminDashboardNav from "./AdminDashboardNav";

const AdminDashboard = () => {
  return (
    <React.Fragment>
      <AdminDashboardNav />
      <CollectionsPage />
      <Footer />
    </React.Fragment>
  );
};

export default AdminDashboard;
