import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";
import { Suspense } from "react";
import { ReduxProvider } from "./context/ReduxProvider";
import NotifyContainer from "./context/NotifyContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SHOPCART",
  description: "E-commerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <NotifyContainer />
          <Suspense fallback={<Loader />}>
            <Header />
            {children}
            <Footer />
          </Suspense>
        </ReduxProvider>
      </body>
    </html>
  );
}
