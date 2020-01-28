import React from "react";
import { listIssues } from "./api";
import IssueFilter from "./IssueFilter";
import IssueList from "./IssueList";

class Issues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtro: ''
    };

    this.onFiltroChanged = this.onFiltroChanged.bind(this);
  }
  
  componentDidMount() {
    this.setState({
      filteredIssues: this.props.issues
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.issues !== this.props.issues) {
      this.setState({
        filteredIssues: this.props.issues
      });
    }
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
      <React.Fragment>
        <IssueFilter filtro={this.state.filtro}
          onFiltroChanged={this.onFiltroChanged} />
        <IssueList issues={this.state.filteredIssues} />
      </React.Fragment>
    );
  }
}

export default Issues;