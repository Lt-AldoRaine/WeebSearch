import { searchQuery } from "./searchStore";
import { goto } from "$app/navigation";

export async function searchAnime(input: string): Promise<void> {
	if (input) {
		searchQuery.set(input);
		await goto(`/${encodeURIComponent(input)}`);
	}
}
