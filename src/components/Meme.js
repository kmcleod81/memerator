import React from 'react';

export default function Meme(props) {
  const imageStyle = {
    width: '100%',
  };

  const line1TextStyle = {
    position: 'absolute',
    color: '#FFFFFF',
    textShadow: '0px 0px 10px #000000',
    fontSize: '45px',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  };

  const line2TextStyle = {
    position: 'absolute',
    bottom: '0px',
    color: '#FFFFFF',
    textShadow: '0px 0px 10px #000000',
    fontSize: '45px',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  };

  const memeContainerStyle = {
    position: 'relative',
  };

  return (
    <>
      <div style={memeContainerStyle}>
        <div style={line1TextStyle}>{props.state.line1Text}</div>
        <div style={line2TextStyle}>{props.state.line2Text}</div>
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
