import type { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { Global } from "@emotion/react";
import Layout from "../src/components/commons/layout";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createContext, useState } from "react";

type IContext = {
	global: {
		isMember: string | undefined;
		setIsMember: (e: any) => void;
	};
};

export const GlobalContext = createContext<IContext>({
	global: {
		isMember: "",
		setIsMember: () => {},
	},
});

export default function App({ Component, pageProps }: AppProps) {
	const [isMember, setIsMember] = useState();

	const value = {
		global: {
			isMember: isMember,
			setIsMember: setIsMember,
		},
	};

	return (
		<GlobalContext.Provider value={value}>
			<ThemeProvider>
				<Layout>
					<Global styles={globalStyles} />
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</GlobalContext.Provider>
	);
}
