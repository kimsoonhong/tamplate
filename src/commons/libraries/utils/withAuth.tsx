import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (Component: any) => (props: any) => {
	const router = useRouter();

	useEffect(() => {
		if (window.localStorage.getItem("auth") === JSON.stringify(["nonMember"])) {
			window.localStorage.removeItem("auth");
			alert("회원권한으로 접근해 주세요");
			router.push("/");
		}
	}, []);

	return <Component {...props} />;
};

export default withAuth;
