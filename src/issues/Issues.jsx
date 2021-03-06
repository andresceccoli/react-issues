import React from "react";
import { listIssues } from "../api";
import IssueFilter from "./IssueFilter";
import IssueList from "./IssueList";
import NewIssue from "./NewIssue";
import { Switch, Route, withRouter } from "react-router-dom";
import IssueDetail from "./IssueDetail";

class Issues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtro: ''
    };

    this.onFiltroChanged = this.onFiltroChanged.bind(this);
  }

  loadIssues() {
    const issues = listIssues();
    this.setState({
      issues: issues,
      filteredIssues: issues
    });
  }
  
  componentDidMount() {
    this.loadIssues();
  }

  onFiltroChanged(e) {
    const f = this.state.filtro.toUpperCase();

    const filtrados = (this.state.issues &&
      this.state.issues.filter(i => (
        i.titulo.toUpperCase().indexOf(f) !== -1 || 
        i.contenido.toUpperCase().indexOf(f) !== -1 || 
        i.usuario.toUpperCase().indexOf(f) !== -1))) || [];

    this.setState({
      filtro: e.target.value,
      filteredIssues: filtrados
    });
  }

  onNewIssue() {
    this.loadIssues();
  }

  render() {
    console.log('match', this.props.match);
    return (
      <React.Fragment>
        <h3>Issues</h3>
        <Switch>
          <Route path={`${this.props.match.path}/new`}>
            <NewIssue onNewIssue={this.onNewIssue.bind(this)} />
          </Route>
          <Route path={`${this.props.match.path}/:issueId`}>
            <IssueDetail />
          </Route>
          <Route exact path={this.props.match.path}>
            <IssueFilter filtro={this.state.filtro}
              onFiltroChanged={this.onFiltroChanged} />
            <IssueList issues={this.state.filteredIssues} />
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(Issues);