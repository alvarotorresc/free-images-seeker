import React from "react";

const Image = props => {
  const {
    largeImageURL,
    likes,
    previewURL,
    tags,
    views,
    user,
    user_id
  } = props.image;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">
            <span role="img" aria-label="heart">
              &#128151;
            </span>
            {likes} Likes
          </p>
          <p className="card-text">
            <span role="img" aria-label="glasess">
              &#128083;
            </span>
            {views} Views
          </p>
          <p className="card-text">
            <span role="img" aria-label="glasess">
              &#129333;
            </span>
            <a
              href={`https://pixabay.com/users/${user}-${user_id}/`}
              target="blank"
              className="text-info"
            >
              {user}
            </a>
          </p>

          <a
            href={largeImageURL}
            target="blank"
            className="btn btn-danger btn-block"
          >
            See image
          </a>
        </div>
      </div>
    </div>
  );
};

export default Image;
