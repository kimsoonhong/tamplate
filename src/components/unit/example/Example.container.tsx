import ExampleFooterUI from "./example.presenter/ExampleFooter";
import ExampleInfoUI from "./example.presenter/ExampleInfo";
import ExampleTableUI from "./example.presenter/ExampleTabel";

import withAuth from "commons/libraries/utils/withAuth";
export const ExampleDetail = () => {
	// 가능하면 함수와 state는 container 파일에 몰아서 관리하고,
	// React Element를 Return 하는 파일은 presenter 파일에서 관리한다.
	return (
		<div>
			<ExampleInfoUI />
			<ExampleTableUI />
			<ExampleFooterUI />

			{/* UI코드가 너무 길어지면 컴퍼넌트를 분리할 수도 있지만 가능하면 코드의 길이는 상관않고 presenter 파일 하나로 관리함을 권장한다. */}
		</div>
	);
};

export default withAuth(ExampleDetail);
