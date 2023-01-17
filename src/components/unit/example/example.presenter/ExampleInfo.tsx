import { EXAMPLE_CONST } from "commons/constants/ExConst";

export default function ExampleInfoUI() {
	return (
		<div>
			<div>
				<div>이름 : {EXAMPLE_CONST.NAME}</div>
				<div>성별 : {EXAMPLE_CONST.BERTH}</div>
				<div>생녕월일 : {EXAMPLE_CONST.BERTH}</div>
				<div>MBTI : {EXAMPLE_CONST.MBIT}</div>
			</div>
		</div>
	);
}
