import React from "react";
import {connect} from "react-redux";
import {toggleAll} from "../store/actions";
import TodoItem from "./TodoItem";
import {Filter} from "../utils/Enums";

class TodoList extends React.Component {
  filterTodo = () => {
    switch (this.props.currentFilter) {
      case Filter.active:
        return this.props.todos.filter(item => !item.completed);
      case Filter.completed:
        return this.props.todos.filter(item => item.completed);
      default:
        return this.props.todos;
    }
  }

  render() {
    return(
      <section className="main">
        <input id="toggle-all"
               className="toggle-all"
               type="checkbox"
               checked={this.props.allCompleted}
               onChange={(e) => {this.props.toggleAll(!this.props.allCompleted)}}
        />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {
              this.filterTodo().map(
                item =>
                  <TodoItem
                    key={item.id}
                    item={item}
                  />
              )
            }
          </ul>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    allCompleted: state.allCompleted,
    currentFilter: state.currentFilter
  }
}

const mapDispatchToProps = {
  toggleAll
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
