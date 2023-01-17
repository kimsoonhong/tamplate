import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import LoginUI from "./Login.presenter";
import { GlobalContext } from "../../../../pages/_app";

export default function LoginDetail() {
	const { global } = useContext(GlobalContext);

	const router = useRouter();
	const onClickMemberLogin = () => {
		window.localStorage.setItem("auth", JSON.stringify(["member"]));
		global.setIsMember("회원");
		router.push("/products");
	};
	const onClickNonMemberLogin = () => {
		window.localStorage.setItem("auth", JSON.stringify(["nonMember"]));
		global.setIsMember("비회원");
		router.push("/products");
	};

	useEffect(() => {
		window.localStorage.removeItem("auth");
	}, []);

	return (
		<LoginUI
			onClickMemberLogin={onClickMemberLogin}
			onClickNonMemberLogin={onClickNonMemberLogin}
		/>
	);
}
