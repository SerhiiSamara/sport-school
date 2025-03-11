import ContactButton from "@/components/buttons/ContactButton";
import EnrollButton from "@/components/buttons/EnrollButton";

export default function Home() {
	return (
		<main>
			<section className="flex flex-col gap-4">
				<h1>КДЮСШ 15</h1>
				<div className="bg-block-dark p-[50px]">
					<EnrollButton />
				</div>
				<ContactButton />
			</section>
		</main>
	);
}
