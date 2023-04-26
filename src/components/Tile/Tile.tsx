import React, { ReactNode } from 'react';

type Props = {
  icon: ReactNode | string,
  text: string,
}

export default function Tile({ icon, text }: Props) {
  return (
    <>
      {
        typeof icon === 'string'
          ? (
            <img
              src={icon}
              alt="Elect Common Sense"
            />
          )
          : icon
      }
      <div>{text}</div>
    </>
  );
}
