import { Card } from 'react-bootstrap';
import React from 'react';
import './TextCard.css';

function TextCard(props) {
  return (
    <Card className='card__box text-center p-5'>
      <Card.Body>
        <i className={`card__icon ${props.icon}`}></i>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className=' card__title'>{props.subtitle}</Card.Subtitle>
        <Card.Text className=' card__text'>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TextCard;
