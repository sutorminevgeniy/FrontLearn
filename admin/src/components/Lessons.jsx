import React from 'react';
import { history } from '../store';

import CardContainer from '../container/CardContainer';

class Lessons extends React.Component {
    constructor(props){
        super(props);
 
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(event){
        event.preventDefault();

        history.push('/lessons/new/new');
    }

    render() {
        const lessons = this.props.match.params.topic 
                        ? this.props.data.filter(lessons => lessons.topic === this.props.match.params.topic) 
                        : this.props.data;

        return (
            <main id="books">
                <div className="mdc-layout-grid">
                    <div className="mdc-layout-grid__inner">
                        {lessons.map((lesson, index) =>
                            <div key={index} className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
                                <CardContainer lesson={lesson} />
                            </div>
                        )}
                    </div>
                </div>
                <section className="mdc-card__actions">
                    <button onClick = {this.handleAdd }>Добавить урок</button>
                </section>
            </main>
        );
    }    
}



export default Lessons;