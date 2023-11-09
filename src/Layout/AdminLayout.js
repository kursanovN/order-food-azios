import React from "react";
import { AddFoods } from "../components/admin/AddFoods";
import { AdminHeader } from "../components/admin/AdminHeader";

export const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <div>
        <AddFoods />
      </div>
    </>
  );
};
