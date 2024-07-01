import React from 'react';
import Header from '../../components/Header/Header';
import Letter from '../../components/Letter/Letter';

export default function Home() {
  return (
    <div className="page">
      <Header
        redText="ELECT"
        whiteText="COMMON SENSE"
        children={[<Letter key={1} />]}
      />
    </div>
  );
}
