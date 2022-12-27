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

	@font-face {
		font-family: "Oboksanghoe_B";
		src: url("/font/Oboksanghoe_B.otf");
	}

	@font-face {
		font-family: "Oboksanghoe_L";
		src: url("/font/Oboksanghoe_L.otf");
	}

	@font-face {
		font-family: "Oboksanghoe_R";
		src: url("/font/Oboksanghoe_R.otf");
	}

	@font-face {
		font-family: "normal";
		src: url("/font/normal4.ttf");
	}

	@font-face {
		font-family: "live";
		src: url("/font/header.ttf");
	}

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

	br {
		/* font-weight: 900; */
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
		--font-regular: 32px;
		--font-small: 24px;
		--font-micro: 12px;

		/* font-weight */
		--weight-bold: 800;
		--weight-semibold: 600;
		--weight-lighter: 100;

		/* color */
		--color-1: #fed500;
		--color-2: #ffb31f;
		--color-3: #b4b4b4;
		--color-4: #b4b4b4;
		--color-5: #b4b4b4;
		--color-light-gray: #f8f8f8;

		@media ${breakPoints.mobile} {
			/* font-size */
			--font-large: 32px;
			--font-medium: 20px;
			--font-regular: 46px;
			--font-small: 12px;
			--font-micro: px;

			/* font-weight */
			--weight-bold: 800;
			--weight-semi-bold: 600;
			--weight-regular: ;

			/* color */
			--color-1: #fed500;
			--color-2: #ffb31f;
			--color-3: #b4b4b4;
			--color-4: #b4b4b4;
			--color-5: #b4b4b4;
			--color-light-gray: #f8f8f8;
		}
	}
`;
