import * as React from "react";
import { EntryService } from "../service/EntryService";

interface MyState {
    loading: boolean;
    message: string;
}

class Home extends React.Component<{},{}> {
    state: MyState = {
      loading: true,
      message: ''
    };
    private entryService = new EntryService();

    componentDidMount() {
        this.entryService.fetchEntries().then((entries) => {
            this.updateEntry(entries);
        }).catch((error) => {
            console.error(error);
        })
    }

    render() {
      return (
        <div>
          {this.state.loading ? 'Loading....' : this.state.message}
        </div>
      );
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