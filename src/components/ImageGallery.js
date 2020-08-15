import React from 'react';
import memes from '../data/memes.json';
import MemeImage from './MemeImage';

export default function ImageGallery(props) {
  // need to get the list of images to display
  // need to render a <MemeImage /> component for each image
  // need a event for when the user selects an image, to update the state
  console.log(memes);
  return (
    <ul className="list-group">
      {memes.map((image) => (
        <MemeImage
          setState={props.setState}
          state={props.state}
          image={image}
        />
      ))}
    </ul>
  );
}
