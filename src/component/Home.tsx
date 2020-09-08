import * as React from "react";
import { EntryService } from "../service/EntryService";

interface MyState {
    loading: boolean;
    message: string;
}

class Home extends React.Component<{},MyState> {
    state: MyState = {
      loading: true,
      message: ''
    };
    private entryService: EntryService;
    constructor(props: any) {
        super(props);
        this.entryService = new EntryService();
        this.refreshEntry = this.refreshEntry.bind(this);
    }

    componentDidMount() {
        this.refreshEntry();
    }

    render() {
      return (
        <div>
          {this.state.loading ? 'Loading....' : this.state.message} <br />
          <button onClick={this.refreshEntry}>Refresh</button>
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

  export default Home