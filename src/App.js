import React from 'react';

import './App.css';
import IssueList from './IssueList';
import IssueFilter from './IssueFilter';
import { listIssues } from './api';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewIssue from './NewIssue';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtro: ''
    };

    this.onFiltroChanged = this.onFiltroChanged.bind(this);
  }

  componentDidMount() {
    const issues = listIssues();
    this.setState({
      issues: issues,
      filteredIssues: issues
    });
  }

  onFiltroChanged(e) {
    // const filtrados = [];

    // if (this.state.issues) {
    //   const f = this.state.filtro.toUpperCase();
    //   for (const issue of this.state.issues) {
    //     if (issue.titulo.toUpperCase().indexOf(f) !== -1 ||
    //         issue.contenido.toUpperCase().indexOf(f) !== -1 ||
    //         issue.usuario.toUpperCase().indexOf(f) !== -1) {
    //       filtrados.push(issue);
    //     }
    //   }
    // }

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

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <h3>Issues</h3>
          <Switch>
            <Route path="/new">
              <NewIssue />
            </Route>
            <Route path="/">
              {/* <Issues /> */}
              <IssueFilter filtro={this.state.filtro}
                onFiltroChanged={this.onFiltroChanged} />
              <IssueList issues={this.state.filteredIssues} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
