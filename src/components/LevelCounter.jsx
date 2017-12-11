import messages from '../data/messages';

import React from 'react';

class LevelCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      levelsShow: false,
    };

    this.nextLevel = this.nextLevel.bind(this);
    this.prevLevel = this.prevLevel.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
    this.toggleLevels = this.toggleLevels.bind(this);
  }

  // Следующий уровень
  nextLevel() {
    if(this.props.state.level < (this.props.state.lesson.levels.length - 1)) {
      this.props.nextLevel();
    }
  }

  // Предыдущий уровень
  prevLevel() {
    if(this.props.state.level > 0) {
      this.props.prevLevel();
    }
  }

  // Выбор уровня
  changeLevel(event) {
    let level = parseInt(event.target.dataset.level);

    this.props.changeLevel( level );
  }

  // Открытие закрытие окна с уровнями
  toggleLevels() {
    this.setState({ levelsShow: !this.state.levelsShow });
  } 

  // Построение =====================================================================================
  // Проверка перед обнавлением состояния или свойств
  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.levelsShow) {
      nextState.levelsShow = false;
    }

    return true;
  } 

  render() {
    const lang = this.props.state.lang;
    const level = this.props.state.level;
    const levels = this.props.state.lesson.levels;

    return (
      <div id="level-counter">
        <span className={ "arrow left" + (level === 0 ? " disabled" : "") } onClick={ this.prevLevel }>◀</span>

        <span id="level-indicator" onClick={ this.toggleLevels }>
          <span id="labelLevel" className="translate">{ messages.labelLevel[lang] } </span>
          <span className="current">{ level + 1 }</span>
          <span id="labelOf" className="translate"> { messages.labelOf[lang] } </span>
          <span className="total">{ levels.length } </span>
          <span className="caret">▾</span>
        </span>

        <span className={ "arrow right" + (level === levels.length - 1 ? " disabled" : "")} onClick={ this.nextLevel }>▶</span>

        <div id="levelsWrapper" className={ "tooltip" + (this.state.levelsShow ? "" : " hide") }>
          <div id="levels">
            {
              levels.map((item, i) => {
                return (
                  <span 
                    key={ i } 
                    className={"level-marker" + ( i === level ? " solved current" : "")}
                    onClick={ this.changeLevel }
                    data-level={ i } >{ i + 1 }</span>
                );
              })
            }
          </div>

          <div id="labelReset" className="translate" onClick={ this.toggleLevels }>{ messages.labelReset[lang] }</div>
        </div>
      </div>
    );    
  }

}

export default LevelCounter;