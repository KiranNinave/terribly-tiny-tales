import React from "react";
import { Container, Button, Row, Col, Form } from "react-bootstrap";

import Header from "./components/Header";
import ListItem from "./components/ListItem";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      N: ""
    };
    this.isComponentMounted = true;
  }
  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSummit = async e => {
    e.preventDefault();
    try {
      this.setState({ loading: true });
      const header = {
        method: "GET",
        headers: {}
      };
      const N = this.state.N;
      const response = await fetch(`/api/word/${N}`, header);
      const data = await response.json();
      console.log(data);
      this.setState({ data });
    } catch (err) {
      console.log(err);
    } finally {
      if (this.isComponentMounted) this.setState({ loading: false });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Container className="custom-container">
          <Row>
            <Col xs={12} sm={12} md={4} lg={4}>
              <Form onSubmit={this.onSummit} className="custom-box">
                <Form.Group>
                  <Form.Label>Enter number</Form.Label>
                  <Form.Control
                    type="number"
                    name="N"
                    value={this.state.N}
                    onChange={this.onChange}
                    placeholder="Enter number"
                    required
                  />
                </Form.Group>
                <Button variant="info" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8}>
              {this.state.loading && <h1>loading....</h1>}
              {!this.state.loading &&
                this.state.data.map((item, index) => {
                  return <ListItem key={index.toString()} data={item} />;
                })}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
