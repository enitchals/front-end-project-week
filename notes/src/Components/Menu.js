import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="SiteTitle">Lambda Notes</div>
        <Link to={'/'} className="button">View Your Notes</Link>
        <Link to={'/new'} className="button">+ Create New Note</Link>
      </div>
    );
  }
}

export default Menu;
