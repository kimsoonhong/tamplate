import {
	Input,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
} from "@material-tailwind/react";
import styled from "@emotion/styled";

import MuiButtonS from "../../commons/buttons/MuiButtonS";
import MuiButtonL from "../../commons/buttons/MuiButtonL";
import MuiButtonM from "components/commons/buttons/MuiButtonM";
import { Fragment } from "react";
import { IMUiUI } from "./Mui.types";

export const WapperR = styled.div`
	margin: 12px 0px 12px 0px;
	padding: 12px;
	border: 1px pink solid;
	/* width: 100%; */
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;
export const WapperC = styled.div`
	margin: 12px 0px 12px 0px;
	padding: 12px;
	border: 1px pink solid;

	min-height: 300px;
	/* width: 100%; */
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

export default function MuiUI({ open, handleOpen }: IMUiUI) {
	return (
		<div>
			<WapperR>
				<Button variant="filled">filled</Button>
				<Button variant="gradient">gradient</Button>
				<Button variant="outlined">outlined</Button>
				<Button variant="text">text</Button>
			</WapperR>

			<WapperR>
				<MuiButtonS title={"버튼입니다."} />
				<MuiButtonM title={"버튼입니다."} />
				<MuiButtonL title={"버튼입니다."} />
			</WapperR>

			<WapperC>
				<Input variant="outlined" label="Outlined" />
				<Input variant="standard" label="Standard" />
				<Input variant="static" label="Static" placeholder="Static" />
			</WapperC>

			<WapperR>
				<Menu>
					<MenuHandler>
						<Button variant="gradient">Open Menu</Button>
					</MenuHandler>
					<MenuList>
						<MenuItem>Menu Item 1</MenuItem>
						<MenuItem>Menu Item 2</MenuItem>
						<MenuItem>Menu Item 3</MenuItem>
					</MenuList>
				</Menu>
			</WapperR>

			<WapperR>
				<Fragment>
					<Button onClick={handleOpen} variant="gradient">
						Open Dialog
					</Button>
					<Dialog open={open} handler={handleOpen}>
						<DialogHeader>Its a simple dialog.</DialogHeader>
						<DialogBody divider>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Accusamus ad reprehenderit omnis perspiciatis aut odit! Unde
							architecto perspiciatis, dolorum dolorem iure quia saepe autem
							accusamus eum praesentium magni corrupti explicabo!
						</DialogBody>
						<DialogFooter>
							<Button
								variant="text"
								color="red"
								onClick={handleOpen}
								className="mr-1"
							>
								<span>Cancel</span>
							</Button>
							<Button variant="gradient" color="green" onClick={handleOpen}>
								<span>Confirm</span>
							</Button>
						</DialogFooter>
					</Dialog>
				</Fragment>
			</WapperR>
		</div>
	);
}
