import React from 'react';

export default function Meme(props) {
  const imageStyle = {
    width: '100%',
  };

  return (
    <>
      <div>
        {props.state.currentImage ? (
          <img
            style={imageStyle}
            src={`/images/${props.state.currentImage.file}`}
            alt={props.state.currentImage.name}
          />
        ) : (
          <p>Click on an image to the right to select a background.</p>
        )}
      </div>
    </>
  );
}
