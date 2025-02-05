"use client";

import { ConfigProvider } from "antd";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <ConfigProvider>
      <Header />
      <Main />
      <Footer />
    </ConfigProvider>
  );
}
