import React from 'react';

import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Issues from './issues/Issues';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/issues">
              <Issues />
            </Route>
            <Redirect path="/" to="/issues" />
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
//     -> Usuarios -> NewUser
//                 -> UserList
//     -> Milestones -> MilestoneList
//                   -> NewMilestone

//   /                Home
//   /issues/567   
//   /users  
//   /milestones