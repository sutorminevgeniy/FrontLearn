import React from 'react';
import ToolbarLink from './ToolbarLink';

function Toolbar({ user }) {
  return (
    <header>
      <div className="content">
        <section className="block-title">
          <span className="title">Библиотека</span>
        </section>

        <section className="block-toolbar">
          <nav className="mdc-tab-bar">
            <ToolbarLink exact to="/admin" className="mdc-tab">Главная</ToolbarLink>
            <ToolbarLink to="/admin/about" className="mdc-tab">О проекте</ToolbarLink>
            <ToolbarLink to="/admin/lessons" className="mdc-tab">Уроки</ToolbarLink>
            {user ?
              <ToolbarLink to="/admin/logout" className="mdc-tab">Выйти</ToolbarLink>
              :
              <ToolbarLink to="/admin/login" className="mdc-tab">Войти</ToolbarLink>
            }
          </nav>
        </section>

        <section className="block-usernav">
          <span className="usernav">{user && user.username}</span>
        </section>
      </div>
    </header>
  );
}

export default Toolbar;