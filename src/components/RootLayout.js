import React from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import Store from "../store/Store";
import NavbarComponent from "./NavbarComponent";
const RootLayout = () => {
  return (
    <>
      <Provider store={Store}>
        <div className="w-full fixed z-50">
          <NavbarComponent />
        </div>
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
