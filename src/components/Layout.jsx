import { Suspense } from "react";
import { AppBar } from "./AppBar/AppBar";
import { ToastContainer } from "react-toastify";
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer position="top-right" reverseOrder={false} />
    </div>
  );
};