import { Poppins } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeModeScript } from "flowbite-react";

config.autoAddCss = false;

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Asisten Muhaffidz",
  description: "Platform Pencatatan Hafalan Al-Qur'an",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" style={{scrollBehavior: "smooth"}}>
      <head>
        <ThemeModeScript />
      </head>
      <body className={poppins.className  + " m-0 p-0 bg-gradient-to-tl from-reversePrimary to-middleMan"}>
        {children}
      </body>
    </html>
  );
}
