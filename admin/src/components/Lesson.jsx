import React from 'react';
import { Redirect } from 'react-router'


import LevelCounterContainer from '../container/LevelCounterContainer';
import FieldContainer        from '../container/FieldContainer';
import BoardContainer        from '../container/BoardContainer';

class Lesson extends React.Component {
constructor(props) {
  super(props);

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleAdd = this.handleAdd.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
}

  componentWillMount() {
    this.props.getLesson( this.props.match.params.lessonId );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.editLesson(this.props.lesson.lesson);
  }


  handleAdd(event) {
    event.preventDefault();
    this.props.addLevel();
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.deleteLevel();
  }

  render() { console.log(this.props.lesson);
    // редирект на новый id при певой записи нового урока
    if(this.props.lesson.newUrl && this.props.location.pathname !== this.props.lesson.newUrl){
      return (
        <Redirect to={this.props.lesson.newUrl}/>
      );
    }

    // Вывод пока не подгрузились дданные
    if(!this.props.lesson.lesson) {
      return null;
    }

    // Вывод после загрузки данных
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <button className="save icon" type="submit" >Сохранить</button>

        <div className="page">
          <section id="structure">
            <h1>{ this.props.lesson.lesson.structure.title }</h1>
            <FieldContainer  path="structure"/>
          </section>
        </div>

        <LevelCounterContainer />

        <div className="page">
          <section id="sidebar">
            <FieldContainer  path={"levels." + this.props.lesson.level}/>
          </section>

          <section id="view">
            {(this.props.lesson.lesson.structure.topic === "css" || this.props.lesson.lesson.structure.topic === "html") 
              && <BoardContainer level = "level" />}
          </section>
        </div>

        <button onClick={this.handleAdd}>Добавить уровень</button>
        <button onClick={this.handleDelete}>Удалить уровень</button>

        <div className="page">
          <section id="sidebar">
            <FieldContainer  path="levelWin"/>
          </section>

          <section id="view">
            {(this.props.lesson.lesson.structure.topic === "css" || this.props.lesson.lesson.structure.topic === "html") 
              && <BoardContainer level = "levelWin" />}
          </section>
        </div>
      </form>
    );      
  }  
}


export default Lesson;