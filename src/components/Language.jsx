import React from 'react';

import messages from '../messages';

class Language extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      langShow: false,
    };

    this.toggleLang = this.toggleLang.bind(this);
    this.changeLang = this.changeLang.bind(this);
  }

  // Открытие закрытие окна с языками
  toggleLang() {
    this.setState({ langShow: !this.state.langShow });
  }

  // Выбор уровня
  changeLang(event) {
    event.preventDefault();
    let lang = event.target.dataset.lang;

    this.props.changeLang(lang);
  }

    // Проверка перед обнавлением состояния или свойств
  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.langShow) {
      nextState.langShow = false;
    }

    return true;
  }

  render() {
    return (
      <span id="language">
        <span id="languageActive" className="toggle translate" onClick={ this.toggleLang }>{ messages.languageActive[this.props.state.lang] }</span>
        <span className={ "tooltip" + (this.state.langShow ? "" : " hide") }>
          { Object.entries(messages.languageActive).map(item => {
            return (
              <a 
                key={ item[0] } 
                href={ "#" + item[0] } 
                data-lang={ item[0] }
                onClick={ this.changeLang } >{ item[1] }</a> 
            );
          }) }
        </span>
      </span>
    );    
  } 
}

export default Language;