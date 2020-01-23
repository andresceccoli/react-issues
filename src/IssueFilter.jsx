import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function IssueFilter(props) {

  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Label column sm="1">
          Filtro
        </Form.Label>
        <Col sm="9">
          <Form.Control name="filtro"
            value={props.filtro} onChange={props.onFiltroChanged} />
        </Col>
        <Col sm="2">
          <Link to="/new">
            <Button variant="success">Nuevo Issue</Button>
          </Link>
        </Col>
      </Form.Group>
    </Form>
  );

}

export default IssueFilter;