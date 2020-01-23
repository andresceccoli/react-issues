import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Formik } from "formik";

class NewIssue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { a, b, c } = this.state;

    const initialValues = {
      titulo: '', contenido: '', usuario: ''
    };

    return (
      <Formik initialValues={initialValues}>
        {({ values, handleChange, handleBlur }) => (
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm="1">
                Titulo
              </Form.Label>
              <Col sm="11">
                <Form.Control
                  name="titulo"
                  value={values.titulo}
                  onChange={handleChange}
                  onBlur={handleBlur} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="1">
                Contenido
              </Form.Label>
              <Col sm="11">
                <Form.Control
                  name="contenido"
                  value={values.contenido}
                  onChange={handleChange}
                  onBlur={handleBlur} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="1">
                Usuario
              </Form.Label>
              <Col sm="11">
                <Form.Control
                  name="usuario"
                  value={values.usuario}
                  onChange={handleChange}
                  onBlur={handleBlur} />
              </Col>
            </Form.Group>
          </Form>
        )}
      </Formik>
    );
  }
}

export default NewIssue;