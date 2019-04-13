import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidenav({ topics }) {
  return (
    <aside className="mdc-permanent-drawer">
      <nav className="mdc-list">
        {topics.map(topic => 
          <NavLink
            key={topic.path}
            to={`/admin/lessons/${topic.path}`}
            className="mdc-list-item"
            activeClassName="selected">
              <img 
                src={`../images/javascript.svg`} 
                className="start-detail"
                alt={topic.title} />
              {topic.title}
          </NavLink>
        )}
      </nav>
    </aside>
  );
}

export default Sidenav;