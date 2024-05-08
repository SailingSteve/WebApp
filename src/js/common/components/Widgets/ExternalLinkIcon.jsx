import React from 'react';
// import { ReactSVG } from 'react-svg';
import normalizedImagePath from '../../utils/normalizedImagePath';


export default function ExternalLinkIcon (largeBlue = false) {
  const icon = largeBlue ?
    normalizedImagePath('../../../img/global/svg-icons/external_link_font_awesome_blue.svg') :
    normalizedImagePath('../../../img/global/svg-icons/external_link_font_awesome.svg');
  return (
    <img src={normalizedImagePath(icon)}
         width={largeBlue ? 18 : 14}
         height={largeBlue ? 18 : 14}
         alt="External Link"
         style={{ marginBottom: '3px' }}
    />
  );
}
