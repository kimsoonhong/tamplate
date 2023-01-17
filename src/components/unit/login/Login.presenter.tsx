import { ILoginUI } from "./Login.types";
import { Button } from "@material-tailwind/react";

export default function LoginUI({
	onClickMemberLogin,
	onClickNonMemberLogin,
}: ILoginUI) {
	return (
		<div className="flex flex-col">
			<Button onClick={onClickMemberLogin} className="mb-6">
				회원로그인
			</Button>
			<Button onClick={onClickNonMemberLogin}>비회원로그인</Button>
		</div>
	);
}
