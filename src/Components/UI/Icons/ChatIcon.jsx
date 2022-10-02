import React from 'react';

const ChatIcon = (props) => {
	return (
			<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
			     width={props.width || '24'} height={props.height || '24'} viewBox="0 0 90.000000 90.000000"
			     preserveAspectRatio="xMidYMid meet">
				<g transform="translate(0.000000,90.000000) scale(0.100000,-0.100000)"
				   fill="currentColor" stroke="none">
					<path d="M324 800 c-134 -27 -238 -130 -257 -256 -9 -54 16 -148 51 -194 14
-19 30 -36 34 -38 18 -8 6 -44 -27 -81 -20 -22 -32 -42 -27 -45 13 -8 94 13
128 35 24 14 38 17 55 10 24 -9 24 -8 21 46 -6 88 14 140 77 204 74 73 130 93
247 87 81 -4 84 -4 78 16 -35 112 -128 192 -253 216 -60 11 -69 11 -127 0z"/>
					<path d="M550 499 c-147 -29 -225 -171 -159 -290 43 -78 156 -126 255 -108 34
7 51 5 67 -6 26 -16 107 -36 119 -29 5 3 -7 24 -27 46 -33 35 -35 42 -22 56
52 60 64 150 28 221 -25 48 -94 97 -150 107 -20 3 -43 7 -51 9 -8 1 -35 -1
-60 -6z"/>
				</g>
			</svg>
	);
};

export default ChatIcon;