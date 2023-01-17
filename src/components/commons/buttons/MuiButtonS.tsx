import { Button } from "@material-tailwind/react";

interface IBtn {
	title: string;
}

export default function MuiButtonS({ title }: IBtn) {
	return (
		<div className="flex items-end gap-4 w-max">
			<Button size="sm" ripple={true}>
				{title}
			</Button>
		</div>
	);
}
