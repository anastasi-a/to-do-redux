import React from 'react';
import {connect} from "react-redux";
import {removeCompleted} from "../store/actions";
import FilterItem from "./FilterItem";
import {Filter} from "../utils/Enums";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.filterConfig = [
      {id: Filter.all, title: 'All'},
      {id: Filter.active, title: 'Active'},
      {id: Filter.completed, title: 'Completed'}
    ];
  }

  render() {
    return (
      <div>
        <footer className="footer" style={{display: "block"}}>
          <span className="todo-count">
            <strong>{this.props.todoCount}</strong> item left
          </span>
          <ul className="filters">
            {
              this.filterConfig.map(
                item =>
                  <FilterItem
                    key={item.id}
                    isActive={this.props.currentFilter === item.id}
                    item={item}
                  />
              )
            }
          </ul>
          <button
            className="clear-completed"
            onClick={this.props.removeCompleted}
          >
            Clear completed
          </button>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoCount: state.todos.filter(item => !item.completed).length,
    currentFilter: state.currentFilter
  }
}

const mapDispatchToProps = {
  removeCompleted
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
