export class EntryService {
    private entries = ['Kotlin', 'topografie', 'Sonos', 'Scala']; // dummy data, real data will come from jifvaas backend

    async fetchEntries(): Promise<string[]> {
        console.log('fetching')
        return Promise.resolve(this.entries);
    }
}