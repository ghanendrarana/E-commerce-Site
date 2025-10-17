import React from "react";
import styles from "./categoryLayout.module.css";
import { Link, Outlet } from "react-router-dom";
import Header from "../../layout/header/header";

export default function CategoryLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
