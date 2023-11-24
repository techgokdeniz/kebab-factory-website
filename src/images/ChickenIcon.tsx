import * as React from "react";

type Props = {};

const ChickenIco = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} {...props}>
    <defs>
      <clipPath id="a">
        <path fill="none" d="M0 0h44v44H0z" data-name="Rectangle 59" />
      </clipPath>
    </defs>
    <g
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path
        d="M1 29c1.5-8.625 8.083-16.5 16.619-19.909C32.188 3.271 35.91 15.566 36 17c2.648 1.147 6.186 3.184 7 6-5.687 0-8.75 1.25-11 3-2.405 1.871-6 8.734-6 17"
        data-name="Path 67"
      />
      <path d="M36 17a3.159 3.159 0 0 0-2 1" data-name="Path 68" />
      <path
        d="M39 14c3.167-3.792.765-8.581-3-8-.179-3.486-4.311-4.635-7-3a4.953 4.953 0 0 0-3.851-2C22.415 1 19.417 2.5 19 6"
        data-name="Path 69"
      />
      <path
        d="M36 28c.538 1.793 3.812 8.747-.017 10.985C33.069 40.689 30 38 30 38"
        data-name="Path 70"
      />
    </g>
  </svg>
);
export default ChickenIco;
