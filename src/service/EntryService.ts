export class EntryService {
    async fetchEntries(): Promise<string[]> {
        return fetch('https://api.jimisfanvan.nl/')
            .then(res => res.json())
            .then(entries => entries.map((obj: any) => obj.value));
    }
}
