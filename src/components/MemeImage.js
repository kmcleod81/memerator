import React from 'react';

export default function MemeImage(props) {
  const imageStyle = {
    width: '100%',
  };

  const setImage = () => {
    props.setState({
      ...props.state, // maintains the current state
      currentImage: props.image, // setting the new values we want to change
    });
  };

  return (
    <li className="list-group-item">
      <img
        style={imageStyle}
        src={`/images/${props.image.file}`}
        alt={props.image.name}
        onClick={setImage}
      />
    </li>
  );
}
