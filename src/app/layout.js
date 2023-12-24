import { Poppins } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/NavbarComponent";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
	title: "Project Test",
	description:
		"Suitmedia Front End Developer Project Test by Muhammad Afif Ma'ruf",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<NavbarComponent />
				<main className="">{children}</main>
			</body>
		</html>
	);
}
