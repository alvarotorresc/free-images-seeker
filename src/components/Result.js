import React, { Component } from "react";
import Image from "./Image";
import Pagination from "./Pagination";

export default class Result extends Component {
  showImages = () => {
    const images = this.props.images;

    if (images.length === 0) return false;

    return (
      <React.Fragment>
        <div className="col-12 p-5 row">
          {images.map(image => (
            <Image key={image.id} image={image} />
          ))}
        </div>
        <Pagination
          prevPage={this.props.prevPage}
          nextPage={this.props.nextPage}
        />
      </React.Fragment>
    );
  };

  render() {
    return <React.Fragment>{this.showImages()}</React.Fragment>;
  }
}
