import React from "react";
import { withRouter, Link } from "react-router-dom";
import { get, close, reopen } from "../api";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import moment from "moment";
import "./IssueDetail.css";
import ReactMarkdown from "react-markdown";

class IssueDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.loadIssue();
  }

  loadIssue() {
    const id = Number(this.props.match.params.issueId);
    const issue = get(id);
    this.setState({ issue });
  }

  onCerrar() {
    close(this.state.issue.id);
    this.loadIssue();
  }

  onReabrir() {
    reopen(this.state.issue.id);
    this.loadIssue();
  }

  render() {
    const { issue } = this.state;

    return (
    <div>
      {issue &&
        <React.Fragment>
          <div className="issue-header">
            <Link to="/issues">&lt; Volver</Link>
            <h3>
              {issue.titulo}
              <span className="issue-id">#{issue.id}</span>
            </h3>
          </div>
          <div className="issue-info">
            {issue.estado === "open" && <Badge variant="success">Abierto</Badge>}
            {issue.estado === "closed" && <Badge variant="danger">Cerrado</Badge>}
            <span className="issue-user">{issue.usuario}</span>
            <span className="issue-date">abrió este issue {moment.unix(issue.fecha).fromNow()}</span>
          </div>
          <ReactMarkdown source={issue.contenido} className="issue-contenido" />

          {issue.estado === "open" && <Button onClick={this.onCerrar.bind(this)}>Cerrar</Button>}
          {issue.estado === "closed" && <Button onClick={this.onReabrir.bind(this)}>Reabrir</Button>}
          {issue.estado === "open" && issue.modificado && ` reabierto el ${moment.unix(issue.modificado).format('LLLL')}`}
          {issue.estado === "closed" && ` cerrado el ${moment.unix(issue.modificado).format('LLLL')}`}
        </React.Fragment>
      }
    </div>
    );
  }

}

export default withRouter(IssueDetail);