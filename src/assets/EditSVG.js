import React from 'react';
import {SvgXml} from 'react-native-svg';

const t =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" d="M364 125L87 403l-23 45 45-23 278-277-23-23zm57-56l-23 22 23 23 22-23a16 16 0 000-22h0a16 16 0 00-22 0z"/></svg>';

const EditSvg = ({height, width}) => {
  return <SvgXml xml={t} width={width} height={height} />;
};

export default EditSvg;
