import { Card } from 'react-bootstrap';
import React from 'react';
import './TextCard.css';
import Icon from './Icon';

function TextCard(props) {
  return (
    <Card
      className='card__box text-center p-5'
      data-aos={props.dataAos}
      data-aos-delay={props.dataDelay}
    >
      <Card.Body>
        <Icon icon={props.icon} />
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className=' card__title'>{props.subtitle}</Card.Subtitle>
        <Card.Text className=' card__text'>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TextCard;
