import React from "react";
import {connect} from "react-redux";
import {filterTodo} from "../store/actions";

class FilterItem extends React.Component {
  render() {
    return (
      <li onClick={() => this.props.filterTodo(this.props.item.id)}>
        <span className={this.props.isActive ? "selected" : ""}>
          {this.props.item.title}
        </span>
      </li>
    )
  }
}

const mapDispatchToProps = {
  filterTodo
}

export default connect(null, mapDispatchToProps)(FilterItem);
