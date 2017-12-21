import React from 'react';
import { Link } from 'react-router-dom';

function Card({ lessons }) {
    return (
        <div className="mdc-card">
            <div className="mdc-card__horizontal-block">
                <img src={`/images/${lessons.image}`} className="mdc-card__media-item mdc-card__media-item--2x" alt={lessons.title} />

                <section className="mdc-card__primary">
                    <h2 className="mdc-card__title mdc-card__title--large">{lessons.title}</h2>
                    <p className="mdc-card__subtitle">{lessons.author}</p>
                    <p className="mdc-card__subtitle">{lessons.preview_text}</p>
                </section>
            </div>

            <section className="mdc-card__actions">
                <Link to={`/lessons/${lessons.topic}/${lessons.lessonId}`} className="mdc-button mdc-card__action">Пройти</Link>
            </section>
        </div>
    );
}

export default Card;