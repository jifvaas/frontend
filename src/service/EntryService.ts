export class EntryService {

    constructor(private entries: string[]) {
        entries = ['Kotlin', 'topografie', 'Sonos', 'Scala']
    }

    fetchEntries(): string[] {
        return this.entries;
    }
}