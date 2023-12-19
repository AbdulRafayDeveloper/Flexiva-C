import React from "react";
import UserHeader from "../includes/header";
import UserFooter from "../includes/footer";

function UserLayout({ children }) {
  return (
    <>
      <UserHeader />
      <div class="page-wrapper">
        <main>{children}</main>
      </div>
      <UserFooter/>
    </>
  );
}

export default UserLayout;
