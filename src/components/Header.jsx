import React from "react";
import {connect} from "react-redux";
import {create} from "../store/actions";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    }
  }

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value.trim()) {
        this.props.create(this.state.value);
        this.setState({value: ""});
      }
    }
  }

  render() {
    return(
      <div>
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo"
                 placeholder="What needs to be done?"
                 value={this.state.value}
                 onChange={(e) => this.setState({value: e.target.value})}
                 onKeyPress={this.onKeyPress}
          />
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = {
  create
}

export default connect(null, mapDispatchToProps)(Header);
