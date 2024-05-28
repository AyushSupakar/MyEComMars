import { Inter } from "next/font/google";
import "./globals.css";
import Sessionwrapper from "../../components/Sessionwrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EComMars_App",
  description: "Your favourite shopping destination",
};

export default function RootLayout({ children }) {
  return (
    <Sessionwrapper>
      <html lang="en">
        
      <body className={inter.className}>{children}</body>
     
    </html> 
    </Sessionwrapper>
    
  );
}
