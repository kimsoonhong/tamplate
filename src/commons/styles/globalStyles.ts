import { css } from "@emotion/react";
import { breakPoints } from "./media";

export const globalStyles = css`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Oboksanghoe_R, Noto Sans KR, BlinkMacSystemFont, Segoe UI,
			Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
			sans-serif;
	}
	/* 
	@font-face {
		font-family: "Oboksanghoe_B";
		src: url("/fonts/Oboksanghoe_B.otf");
	}

	@font-face {
		font-family: "Oboksanghoe_L";
		src: url("/fonts/Oboksanghoe_L.otf");
	}

	@font-face {
		font-family: "Oboksanghoe_R";
		src: url("/fonts/Oboksanghoe_R.otf");
	} */

	body {
		background-color: #fdfbed40;
	}

	button {
		display: inline-block;
		font-family: inherit;
		vertical-align: middle;
		cursor: pointer;
		white-space: nowrap;
		text-decoration: none;
		background: transparent;
		border: none;
		outline: 0;
	}

	input:focus,
	select:focus,
	textarea:focus,
	button:focus {
		outline: none;
	}

	input,
	textarea,
	button {
		padding: 0;
	}

	:root {
		/* font-size */
		--font-large: 52px;
		--font-medium: 44px;
		--font-regular: 36px;
		--font-small: 24px;
		--font-micro: px;

		/* font-weight */
		--weight-bold: 800;
		--weight-semi-bold: 600;
		--weight-regular: ;

		/* color */
		--color-yellow: #fed500;
		--color-gray: #b4b4b4;
		--color-light-gray: #f8f8f8;

		@media ${breakPoints.mobile} {
			/* font-size */
			--font-large: 32px;
			--font-medium: 20px;
			--font-regular: 16px;
			--font-small: 12px;
			--font-micro: px;

			/* font-weight */
			--weight-bold: 800;
			--weight-semi-bold: 600;
			--weight-regular: ;

			/* color */
			--color-yellow: #fed500;
			--color-gray: #b4b4b4;
			--color-light-gray: #f8f8f8;
		}
	}
`;
