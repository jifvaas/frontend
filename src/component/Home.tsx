import * as React from "react";
import { EntryService } from "../service/EntryService";

class Home extends React.Component<{}, { loading: boolean, message: string }> {
    private entryService: EntryService;
    constructor(props: {}) {
        super(props);

        this.state = {
            loading: true,
            message: ''
        }

        this.entryService = new EntryService();
    }

    componentDidMount() {
        this.refreshEntry();
    }

    render() {
      return (
        <div>
          {this.state.loading ? 'Loading....' : this.state.message} <br />
          <button onClick={ () => this.refreshEntry() }>Refresh</button>
        </div>
      );
    }

    private refreshEntry() {
        this.entryService.fetchEntries().then((entries) => {
            this.updateEntry(entries);
        }).catch((error) => {
            console.error(error);
        })
    }

    private updateEntry(entries: string[]) {
        this.setState((state) => ({
            loading: false,
            message: this.getRandomEntry(entries)
        }));
    }

    private getRandomEntry(entries: string[]): string {
        const randomIndex = Math.floor(Math.random() * entries.length);
        return entries[randomIndex];
    }
  }

  export default Home;
