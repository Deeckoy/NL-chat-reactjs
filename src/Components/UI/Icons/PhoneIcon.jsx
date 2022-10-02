import React from 'react';

const PhoneIcon = (props) => {
	return (
			<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
			     width={props.width || '24'} height={props.height || '24'} viewBox="0 0 90.000000 90.000000"
			     preserveAspectRatio="xMidYMid meet">
				<g transform="translate(0.000000,90.000000) scale(0.100000,-0.100000)"
				   fill="currentColor" stroke="none">
					<path d="M209 796 c-12 -6 -36 -28 -53 -49 -63 -79 -29 -192 104 -345 85 -99
202 -200 280 -241 104 -56 193 -42 247 38 30 45 21 58 -75 115 -88 52 -104 54
-147 26 -52 -34 -69 -27 -161 64 -91 92 -98 109 -64 161 11 17 20 38 20 49 0
27 -92 184 -112 189 -9 3 -26 0 -39 -7z"/>
				</g>
			</svg>
	);
};

export default PhoneIcon;