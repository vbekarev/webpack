  var React = require('react');
  import { Tab,  Row,  Col, Nav, NavItem, Grid, Thumbnail, Button } from 'react-bootstrap';


  class Body extends React.Component {

    render(){
      return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="clearfix">
              <Col sm={2}>
                <Nav bsStyle="pills" stacked>
                  <NavItem eventKey="first">
                    Tab 1
                  </NavItem>
                  <NavItem eventKey="second">
                    Tab 2
                  </NavItem>
                </Nav>
              </Col>
              <Col sm={8}>
                <Tab.Content animation>
                  <Tab.Pane eventKey="first">
                    <Grid>
                        <Row>
                          <Col xs={6} md={4}>
                            <Thumbnail src="https://react-bootstrap.github.io/thumbnail.png" alt="242x200">
                              <h3>Thumbnail label</h3>
                              <p>Description</p>
                              <p>
                                <Button bsStyle="primary">Button</Button>&nbsp;
                                <Button bsStyle="default">Button</Button>
                              </p>
                            </Thumbnail>
                          </Col>
                          <Col xs={6} md={4}>
                            <Thumbnail src="https://react-bootstrap.github.io/thumbnail.png" alt="242x200">
                              <h3>Thumbnail label</h3>
                              <p>Description</p>
                              <p>
                                <Button bsStyle="primary">Button</Button>&nbsp;
                                <Button bsStyle="default">Button</Button>
                              </p>
                            </Thumbnail>
                          </Col>
                          <Col xs={6} md={4}>
                            <Thumbnail src="https://react-bootstrap.github.io/thumbnail.png" alt="242x200">
                              <h3>Thumbnail label</h3>
                              <p>Description</p>
                              <p>
                                <Button bsStyle="primary">Button</Button>&nbsp;
                                <Button bsStyle="default">Button</Button>
                              </p>
                            </Thumbnail>
                          </Col>
                        </Row>
                            <Row>
                              <Col xs={6} md={4}>
                                <Thumbnail src="https://react-bootstrap.github.io/thumbnail.png" alt="242x200">
                                  <h3>Thumbnail label</h3>
                                  <p>Description</p>
                                  <p>
                                    <Button bsStyle="primary">Button</Button>&nbsp;
                                    <Button bsStyle="default">Button</Button>
                                  </p>
                                </Thumbnail>
                              </Col>
                              <Col xs={6} md={4}>
                                <Thumbnail src="https://react-bootstrap.github.io/thumbnail.png" alt="242x200">
                                  <h3>Thumbnail label</h3>
                                  <p>Description</p>
                                  <p>
                                    <Button bsStyle="primary">Button</Button>&nbsp;
                                    <Button bsStyle="default">Button</Button>
                                  </p>
                                </Thumbnail>
                              </Col>
                              <Col xs={6} md={4}>
                                <Thumbnail src="https://react-bootstrap.github.io/thumbnail.png" alt="242x200">
                                  <h3>Thumbnail label</h3>
                                  <p>Description</p>
                                  <p>
                                    <Button bsStyle="primary">Button</Button>&nbsp;
                                    <Button bsStyle="default">Button</Button>
                                  </p>
                                </Thumbnail>
                              </Col>
                            </Row>
                      </Grid>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    Tab 2 content
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
      );
    }
  }

  module.exports = Body;
