import { useState } from "react";
import MuiUI from "./Mui.presenter";
import withAuth from "commons/libraries/utils/withAuth";

export const MuiDetail = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(!open);

	return <MuiUI handleOpen={handleOpen} open={open} />;
};

export default withAuth(MuiDetail);
