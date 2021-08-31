import React from "react";
import {connect} from "react-redux";
import {update, remove, toggle, toggleCheck} from "../store/actions";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      value: ""
    }
  }

  editHandler = () => {
    this.setState({
      isEditing: true,
      value: this.props.item.title
    })
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  saveChanges = () => {
    this.setState({isEditing: false});
    this.props.update({
      id: this.props.item.id,
      title: this.state.value
    });
  }

  render() {
    if (this.state.isEditing) {
      return(
        <li className="editing">
          <input
            autoFocus={true}
            className="edit"
            value={this.state.value}
            onChange={this.onChange}
            onBlur={this.saveChanges}
          />
        </li>
      );
    }
    return(
      <li className={this.props.item.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.item.completed}
            onChange={() => this.props.toggle(this.props.item.id).then(() => this.props.toggleCheck())}
          />
          <label onDoubleClick={this.editHandler}>
            {this.props.item.title}
          </label>
          <button
            className="destroy"
            onClick={() => this.props.remove(this.props.item.id).then(() => this.props.toggleCheck())}
          >
          </button>
        </div>
      </li>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  update,
  remove,
  toggle,
  toggleCheck
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);