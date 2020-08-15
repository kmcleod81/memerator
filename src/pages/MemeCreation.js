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

  return (
    <>
      <div className="row">
        <div className="col-8">
          <Meme state={state} />
          <MemeForm state={state} setState={setState} />
        </div>
        <div className="col-4">
          <ImageGallery state={state} setState={setState} />
        </div>
      </div>
    </>
  );
}
