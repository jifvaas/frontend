export class EntryService {
    private entries = ['Kotlin', 'topografie', 'Sonos', 'Scala']; // dummy data, real data will come from jifvaas backend
    constructor() {}

    async fetchEntries(): Promise<string[]> {
        return Promise.resolve(this.entries);
    }
}