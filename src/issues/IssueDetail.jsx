import React from "react";
import { withRouter } from "react-router-dom";
import { get } from "../api";

class IssueDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const id = Number(this.props.match.params.issueId);
    const issue = get(id);
    this.setState({ issue });
  }

  render() {
    return (
    <div>
      Issue {this.props.match.params.issueId}
      {this.state.issue &&
        <h3>{this.state.issue.titulo}</h3>
      }
    </div>
    );
  }

}

export default withRouter(IssueDetail);