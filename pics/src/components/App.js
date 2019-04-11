import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

   onSearchSubmit = async term => {
    const response = await unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      },
      headers: {
        Authorization:
          "Client-ID 0fe94d26a130b65a8eb0472e9312a4eb5d4154edc57e979df81e81460b32bd12"
      }
    });

    this.setState({ images: response.data.results });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
