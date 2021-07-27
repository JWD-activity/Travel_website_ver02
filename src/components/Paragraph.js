import React from 'react';
import './Paragraph.css';

function Paragraph(props) {
  const contentType =
    props.contentType === 'content' ? 'p__content ' : 'p__title';
  const spaceing = props.spaceing === 'right' ? 'pr__medium' : 'pl__medium';

  return <p className={`${contentType}${spaceing}`}>{props.content}</p>;
}

export default Paragraph;
