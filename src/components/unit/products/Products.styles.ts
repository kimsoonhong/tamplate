import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
	/* width: 100%; */
	/* width: 1200px; */
	/* margin: auto; */
	/* padding-bottom: 60px; */
	background-color: red;
	@media ${breakPoints.mobile} {
		background-color: blue;
		/* width: 100%; */
		/* padding: 0; */
	}
`;
