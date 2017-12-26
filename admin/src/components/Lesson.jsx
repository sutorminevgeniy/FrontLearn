import React from 'react';

import LevelCounterContainer from '../container/LevelCounterContainer';
import FieldContainer        from '../container/FieldContainer';
import BoardContainer        from '../container/BoardContainer';

class Lesson extends React.Component {
  componentWillMount() {
    this.props.getLesson( this.props.match.params.lessonId );
  }

  render() {
    // Вывод пока не подгрузились дданные
    if(!this.props.lesson.lesson) {
      return null;
    }

    // Вывод после загрузки данных
    return (
      <form action="">
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
            <BoardContainer />
          </section>
        </div>

        <div className="page">
          <section id="sidebar">
            <FieldContainer  path="levelWin"/>
          </section>

          <section id="view">
            <BoardContainer />
          </section>
        </div>
      </form>
    );      
  }  
}


export default Lesson;