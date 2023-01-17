import { Button } from "@material-tailwind/react";

type IBtn = {
	title: string;
};

export default function MuiButtonL({ title }: IBtn) {
	return (
		<div className="flex items-end gap-4 w-max">
			<Button size="lg" ripple={true}>
				{title}
			</Button>
		</div>
	);
}
