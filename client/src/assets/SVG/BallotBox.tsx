import React from 'react';

type Props = {
  fillColor: string,
}

export default function BallotBox({ fillColor }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      width="48"
      fill={fillColor}
    >
      <path d="M9 44q-1.2 0-2.1-.9Q6 42.2 6 41v-9.9l6.75-7.45 2.15 2.15L9 32.25h30l-5.55-6.3 2.15-2.15 6.4 7.3V41q0 1.2-.9 2.1-.9.9-2.1.9Zm13.1-15.25-7.95-7.95q-.95-.95-.85-2.125.1-1.175 1-2.075L24.9 6q.85-.85 2.1-.875Q28.25 5.1 29.15 6l7.95 7.95q.85.85.875 2.025Q38 17.15 37 18.15l-10.6 10.6q-.85.85-2.1.9-1.25.05-2.2-.9ZM34.55 15.9l-7.5-7.5-10.4 10.4 7.5 7.5Z"/>
    </svg>
  );
}
