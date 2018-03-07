import React, { Component } from 'react';
import './MyList.css';


class ListItem extends Component {
  render() {
    return (
      <div>
        <li className="list-item">{this.props.doThis}</li>
        <button className="list-item" onClick={this.props.deleteItem}>X</button>
      </div>
    )
  }
}

export default ListItem
