import React from "react";
import CollectionsPage from "../Other Components/CollectionsPage";
import Footer from "../core/Footer";
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
