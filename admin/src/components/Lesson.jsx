import React from 'react';

import LevelCounterContainer from '../container/LevelCounterContainer';
import InstructionsContainer from '../container/InstructionsContainer';
import EditorContainer       from '../container/EditorContainer';
import BoardContainer        from '../container/BoardContainer';

class Lesson extends React.Component {
  componentWillMount() {
    this.props.getLesson( this.props.match.params.lessonId );
  }

  render() {
    // Вывод пока не подгрузились дданные
    if(!this.props.state.lesson) {
      return null;
    }

    // Вывод после загрузки данных
    return (
      <div className="page">
        <section id="sidebar">
          <div>
            <LevelCounterContainer />
            <InstructionsContainer />
          </div>

          {!this.props.state.statusWin && <EditorContainer />}
        </section>

        <section id="view">
          <BoardContainer />
        </section>
      </div>
    );      
  }  
}


export default Lesson;