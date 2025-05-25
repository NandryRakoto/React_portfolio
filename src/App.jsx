import React from "react";
import { Toaster } from "react-hot-toast";
import Page from "./components/Pages/Page";

export default function App() {
  return (
    <>
      
      <Toaster position="top-center" toastOptions={{style : {
        zIndex : 9999999999
      }}}/>
      <Page />
    </>
  );
}
