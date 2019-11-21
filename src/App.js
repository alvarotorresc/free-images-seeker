import React, { Component } from "react";
import Seeker from "./components/Seeker";
import Result from "./components/Result";

class App extends Component {
  state = {
    inputValue: "",
    images: [],
    page: ""
  };

  scroll = () => {
    const elemento = document.querySelector(".jumbotron");
    elemento.scrollIntoView("smooth", "start");
  };

  prevPage = () => {
    let page = this.state.page;
    if (page === 1) return false;
    page -= 1;
    this.setState(
      {
        page
      },
      () => {
        this.searchInApi();
        this.scroll();
      }
    );
  };

  nextPage = () => {
    let page = this.state.page;
    page += 1;
    this.setState(
      {
        page
      },
      () => {
        this.searchInApi();
        this.scroll();
      }
    );
  };

  searchInApi = () => {
    const inputValue = this.state.inputValue;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=10494197-667355600ab9b561af8c3a987&q=${inputValue}&per_page=20&page=${page}`;

    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({ images: result.hits }));
  };

  dataSearch = inputValue => {
    this.setState(
      {
        inputValue: inputValue,
        page: 1
      },
      () => {
        this.searchInApi();
      }
    );
  };

  /*selectRender = () => {
    const images = this.state.images;

    if (images.length === 0) {
      this.render(){
        return
        <h1>No hay resultados</h1>
      }
    }
  }*/
  render() {
    return (
      <div className="app container">
        <div className="jumbotron ">
          <h1 className="text-center mb-5">Pictures Searcher</h1>
          <Seeker dataSearch={this.dataSearch} />
        </div>
        <div className="row justify-content-center">
          <Result
            images={this.state.images}
            prevPage={this.prevPage}
            nextPage={this.nextPage}
          />
        </div>
      </div>
    );
  }
}

export default App;
