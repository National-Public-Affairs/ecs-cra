import React from 'react';
import Header from '../../components/Header/Header';
import Letter from '../../components/Letter/Letter';
import VideoPopup from '../../components/Popup/VideoPopup';

export default function Home() {
  return (
    <div className="page">
      <Header
        redText="ELECT"
        whiteText="COMMON SENSE"
        children={[
          <Letter key={1} />,
          <VideoPopup key={2} />,
        ]}
      />
    </div>
  );
}
