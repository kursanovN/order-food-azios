import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import UsersLayout from "../Layout/UsersLayout";
import MealLayout from "../Layout/MealLayout";
import { AdminLayout } from "../Layout/AdminLayout";
import { useSelector } from "react-redux";
import { ProtectedRout } from "./ProtectedRout";
import { USERS_ROLE } from "../constants";

const MainRoutes = () => {
  const role = useSelector((state) => state.auth.user.role);

  const isAllowed = (roles) => {
    return roles.includes(role);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRout
            isAllowed={isAllowed([USERS_ROLE.GUEST, USERS_ROLE.USER])}
            fallBarPath="/admin"
            component={UsersLayout}
          />
        }>
        <Route
          index
          element={
            <ProtectedRout
              isAllowed={isAllowed([USERS_ROLE.GUEST, USERS_ROLE.USER])}
              fallBarPath="/admin"
              component={MealLayout}
            />
          }
        />
        <Route
          path="signin"
          element={
            <ProtectedRout
              isAllowed={isAllowed([USERS_ROLE.GUEST, USERS_ROLE.USER])}
              fallBarPath={role === USERS_ROLE.USER ? "/admin" : "/"}
              component={SignIn}
            />
          }
        />
        <Route
          path="signup"
          element={
            <ProtectedRout
              isAllowed={isAllowed([USERS_ROLE.GUEST, USERS_ROLE.USER])}
              fallBarPath={role === USERS_ROLE.USER ? "/admin" : "/"}
              component={SignUp}
            />
          }
        />
      </Route>

      <Route
        path="/admin"
        element={
          <ProtectedRout
            isAllowed={isAllowed([USERS_ROLE.GUEST, USERS_ROLE.ADMIN])}
            fallBarPath="/"
            component={AdminLayout}
          />
        }></Route>
    </Routes>
  );
};

export default MainRoutes;
