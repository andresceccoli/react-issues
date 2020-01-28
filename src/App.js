import React from 'react';

import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewIssue from './NewIssue';
import Issues from './Issues';
import { listIssues } from './api';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  loadList() {
    const issues = listIssues();
    this.setState({
      issues: issues
    });
  }

  componentDidMount() {
    this.loadList();
  }

  onNewIssue() {
    console.log('new Issue agregado');
    this.loadList();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <h3>Issues</h3>
          <Switch>
            <Route path="/new">
              <NewIssue onNewIssue={this.onNewIssue.bind(this)} />
            </Route>
            <Route path="/">
              <Issues issues={this.state.issues || []} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// App -> NewIssue
//     -> Issues -> IssueFilter   
//               -> IssueList

// App -> Issues -> NewIssue
//               -> IssueFilter
//               -> IssueList
//               -> IssueDetail