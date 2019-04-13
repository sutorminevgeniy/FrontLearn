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

        history.push('/admin/lessons/new/new');
    }

    render() {
        const lessons = this.props.match.params.topic 
                        ? this.props.data.filter(lessons => lessons.topic === this.props.match.params.topic) 
                        : this.props.data;

        return (
            <div className="books">
                <div className="mdc-layout-grid">
                    {lessons.map((lesson, index) =>
                        <CardContainer key={index} lesson={lesson} />
                    )}
                    <div className="hideitem"></div>
                    <div className="hideitem"></div>
                </div>
                <section className="actions">
                    <button onClick = {this.handleAdd }>Добавить урок</button>
                </section>
            </div>
        );
    }    
}



export default Lessons;