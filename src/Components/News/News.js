import React from "react";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import "./News.css";

const News = (props) => {
  const { title, description, urlToImage, url } = props.article;
  return (
    <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {/* <Card.Img className="img" src={urlToImage} /> */}
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Card.Img className="img" src={urlToImage} />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Button variant="primary" href={url} target="_blank">
                Read More
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default News;
