import React from 'react';

type Props = {
  fillColor: string,
}

export default function Bank({ fillColor }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      width="48"
      fill={fillColor}
    >
      <path d="M12.1 35.95q-.65 0-1.075-.425-.425-.425-.425-1.075v-14q0-.6.45-1.025Q11.5 19 12.1 19q.65 0 1.075.425.425.425.425 1.075v14q0 .6-.45 1.025-.45.425-1.05.425Zm12.1 0q-.65 0-1.075-.425-.425-.425-.425-1.075v-14q0-.6.45-1.025Q23.6 19 24.2 19q.65 0 1.075.425.425.425.425 1.075v14q0 .6-.45 1.025-.45.425-1.05.425Zm-18.75 6q-.6 0-1.025-.45Q4 41.05 4 40.45q0-.65.425-1.075.425-.425 1.075-.425h37.05q.6 0 1.025.45.425.45.425 1.05 0 .65-.425 1.075-.425.425-1.075.425Zm30.45-6q-.65 0-1.075-.425-.425-.425-.425-1.075v-14q0-.6.45-1.025Q35.3 19 35.9 19q.65 0 1.075.425.425.425.425 1.075v14q0 .6-.45 1.025-.45.425-1.05.425ZM25.5 2.8l17.4 9.9q.5.25.8.725.3.475.3 1.025 0 .7-.55 1.125Q42.9 16 42.2 16H5.8q-.7 0-1.25-.425T4 14.45q0-.55.325-1 .325-.45.825-.75L22.5 2.8q.7-.4 1.5-.4t1.5.4ZM10.7 13h26.6Zm0 0h26.6L24 5.4Z"/>
    </svg>
  );
}