import React from 'react';

import LevelCounterContainer from '../container/LevelCounterContainer';
import StructureContainer from '../container/StructureContainer';
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
      <form action="">
        <div className="page">
          <section id="structure">
            <div>
              <StructureContainer />
            </div>
          </section>
        </div>
        <div className="page">
          <section id="sidebar">
            <div>
              <LevelCounterContainer />
            </div>

            {!this.props.state.statusWin && <EditorContainer />}
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