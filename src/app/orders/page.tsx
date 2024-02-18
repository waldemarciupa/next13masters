import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function OrderPage() {
	const user = await currentUser();
	console.log(user);

	if (!user) {
		redirect("/sign-in");
	}

	const email = user.emailAddresses[0]?.emailAddress;
	if (!email) {
		return <div className="px-4 sm:px-8">User does not have email</div>;
	}

	return (
		<div className="px-4 sm:px-8">
			<h1>{user.username} orders</h1>
		</div>
	);
}
