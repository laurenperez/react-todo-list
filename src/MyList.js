import React, { Component } from 'react';
import './MyList.css';
import ListItem from './ListItem';


class MyList extends Component {
  constructor(props){
    super(props)
    this.state = {
      todoItemArray: this.props.theList,
      currentItem: ''
    }
  }

  clearList = (e) => {
    e.preventDefault()
    this.setState({
      todoItemArray: []
    })
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      currentItem: e.target.value
    })
  }

  addItem = (e) => {
    e.preventDefault()
    if (this.state.currentItem) {
      let newVal = this.state.currentItem
      let newArr = Array.from(this.state.todoItemArray)
      newArr.push(newVal)
      this.setState({
        todoItemArray: newArr,
        currentItem: ''
      })
    }
  }

  deleteItem = (e, index) => {
    e.preventDefault()
    let newArr = Array.from(this.state.todoItemArray)
    newArr.splice(index,1)
    this.setState({
      todoItemArray: newArr,
    })
  }


  render() {

    let todoItems = this.state.todoItemArray.map( (item, index) => (
      <ListItem doThis={item} key={index} deleteItem={(e) => this.deleteItem(e, index)}/>
    ))

    return (
      <div>
        <h1>A ToDo List in React:</h1>
        <ul>
          {todoItems}
        </ul>
        <input type="text" value={this.state.currentItem} onChange={this.handleChange} />
        <button onClick={this.addItem}>Add Item</button>
        <br/>
        <button onClick={this.clearList}>Clear List</button>
      </div>
    )
  }
}

export default MyList
