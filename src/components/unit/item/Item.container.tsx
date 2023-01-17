import { useRouter } from "next/router";
export default function ItemDetail() {
	const router = useRouter();

	const onClickBack = () => {
		router.back();
	};

	console.log(router, "router 상세");
	return (
		<div>
			ItemPage!!!
			<br />
			{router.asPath} <br />
			{router.query.item}
			<br />
		</div>
	);
}
