import React, { Component } from "react";

class Seeker extends Component {
  obtainValue = React.createRef();
  dateObtain = e => {
    e.preventDefault();

    const inputValue = this.obtainValue.current.value;

    this.props.dataSearch(inputValue);
  };

  render() {
    return (
      <form onSubmit={this.dateObtain}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              ref={this.obtainValue}
              type="text"
              className="form-control form-control-lg"
              placeholder="Seach an image. Example: laptop..."
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn-block"
              value="Search..."
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Seeker;
