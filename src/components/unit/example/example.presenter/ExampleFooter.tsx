import { Button } from "@material-tailwind/react";

export default function ExampleFooterUI() {
	return (
		<div>
			<div
				style={{
					flexDirection: "row",
					display: "flex",
					justifyContent: "space-around",
				}}
			>
				<Button>확인</Button>
				<Button>뒤로가기</Button>
			</div>
		</div>
	);
}
