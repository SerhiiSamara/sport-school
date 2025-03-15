import ContactButton from "@/components/buttons/ContactButton";
import EnrollButton from "@/components/buttons/EnrollButton";
import ResultButton from "@/components/buttons/ResultsButton";
import SendButton from "@/components/buttons/SendButton";

export default function Home() {
	return (
		<main>
			<section className="flex flex-col gap-4">
				<div className="flex flex-col items-center gap-4 py-8">
					<ContactButton />
					<EnrollButton />
					<ResultButton />
					<SendButton />
				</div>
			</section>
		</main>
	);
}
