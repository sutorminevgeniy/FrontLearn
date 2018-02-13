import React from 'react';
import { Link } from 'react-router-dom';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(event){
        event.preventDefault();

        this.props.deleteLesson(this.props.lesson.lessonId);
    }

    render() {
        let lesson = this.props.lesson;

        return (
            <div className="mdc-card">
                <div className="mdc-card__horizontal-block">
                    <img src={`/images/${lesson.image}`} className="mdc-card__media-item mdc-card__media-item--2x" alt={lesson.title} />

                    <section className="mdc-card__primary">
                        <h2 className="mdc-card__title mdc-card__title--large">{lesson.title}</h2>
                        <p className="mdc-card__subtitle">{lesson.author}</p>
                        <p className="mdc-card__subtitle">{lesson.preview_text}</p>
                    </section>
                </div>

                <section className="mdc-card__actions">
                    <Link to={`/lessons/${lesson.topic}/${lesson.lessonId}`} className="mdc-button mdc-card__action">Редактировать</Link>
                </section>

                <section className="mdc-card__actions">
                    <button onClick = { this.handleDelete }>Удалить</button>
                </section>
            </div>
        );
    }    
}

export default Card;