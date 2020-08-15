import React, { useState } from 'react';
import Meme from '../components/Meme';
import ImageGallery from '../components/ImageGallery';
import MemeForm from '../components/MemeForm';

export default function MemeCreation() {
  const [state, setState] = useState({
    currentImage: null,
    line1Text: '',
    line2Text: '',
  });

  const saveMeme = () => {
    const currentImages = JSON.parse(localStorage.getItem('images')) || [];
    const image = {
      ...state,
      date: new Date(),
    };
    currentImages.push(image);
    localStorage.setItem('images', JSON.stringify(currentImages));
    setState({ currentImage: null, line1Text: '', line2Text: '' });
  };

  return (
    <>
      <div className="row">
        <div className="col-8">
          <Meme state={state} />
          {state.currentImage && <MemeForm state={state} setState={setState} />}
        </div>
        <div className="col-4">
          <div className="btn btn-primary my-2 ml-auto" onClick={saveMeme}>
            Save
          </div>
          <ImageGallery state={state} setState={setState} />
        </div>
      </div>
    </>
  );
}
