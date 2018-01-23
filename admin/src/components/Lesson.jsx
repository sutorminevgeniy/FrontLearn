import React from 'react';

import LevelCounterContainer from '../container/LevelCounterContainer';
import FieldContainer        from '../container/FieldContainer';
import BoardContainer        from '../container/BoardContainer';

class Lesson extends React.Component {
constructor(props) {
  super(props);

  this.handleSubmit = this.handleSubmit.bind(this);
}

  componentWillMount() {
    this.props.getLesson( this.props.match.params.lessonId );
  }

  handleSubmit(event) {
        event.preventDefault();

        this.props.editLesson(this.props.lesson.lesson);
    }

  render() {
    // Вывод пока не подгрузились дданные
    if(!this.props.lesson.lesson) {
      return null;
    }

        console.log(this.props.lesson.lesson);   
    // Вывод после загрузки данных
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <button className="save icon" type="submit" >Save</button>

        <div className="page">
          <section id="structure">
            <h1>{ this.props.lesson.lesson.structure.title }</h1>
            <FieldContainer  path="structure"/>
          </section>
        </div>

        <div className="page">
          <section id="sidebar">
            <div>
              <LevelCounterContainer />
            </div>

            <FieldContainer  path={"levels." + this.props.lesson.level}/>
          </section>

          <section id="view">
            {this.props.lesson.lesson.structure.topic !== "javascript" && <BoardContainer />}
          </section>
        </div>

        <div className="page">
          <section id="sidebar">
            <FieldContainer  path="levelWin"/>
          </section>

          <section id="view">
            {this.props.lesson.lesson.structure.topic !== "javascript" && <BoardContainer />}
          </section>
        </div>
      </form>
    );      
  }  
}


export default Lesson;