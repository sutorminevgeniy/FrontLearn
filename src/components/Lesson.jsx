import React from 'react';

import LevelCounterContainer from '../container/LevelCounterContainer';
import InstructionsContainer from '../container/InstructionsContainer';
import EditorContainer       from '../container/EditorContainer';
import BoardContainer        from '../container/BoardContainer';
import Share        from '../components/Share';
import Credits      from '../components/Credits';


class Lesson extends React.Component {
  componentDidMount() {
      this.props.initStateUser();
  }

  render() {
    console.log(this.props);
    return (
      <div className="page">
        <section id="sidebar">
          <div>
            <LevelCounterContainer />
            <InstructionsContainer />
          </div>

          <EditorContainer />
        </section>

        <section id="view">
          <div id="board">
            <BoardContainer
              styleFigurs  ="questionStyle"
              id           ="pond"
              classFigurs  ="frog"
              classFigureBg="animated pulse infinite" />
            <BoardContainer
              styleFigurs="ansverStyle"
              id         ="background"
              classFigurs="lilypad" />
          </div>
        </section>
      </div>
    );      
  }  
}

export default Lesson;