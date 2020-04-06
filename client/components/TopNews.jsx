import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopArticleJumbo from "./TopArticleJumbo";
import TopMiniArticles from './TopMiniArticles';

const TopNews = ({ topArticles }) => {
  const topMiniArticles = topArticles.slice(1);
  return (
    <Container className="mb-3" fluid>
      <Row>

      </Row>
      <Row>
        <Col lg={6}>
          <TopArticleJumbo
            urlToImage={topArticles[0].urlToImage}
            url={topArticles[0].url}
            content={topArticles[0].content}
            title={topArticles[0].title}
            source={topArticles[0].source.name}
            author={topArticles[0].author}
            publishedAt={topArticles[0].publishedAt}
          />
        </Col>
        <Col lg={6} className="d-none d-lg-block">
          <TopMiniArticles topMiniArticles={topMiniArticles}/>
        </Col>
      </Row>
    </Container>
  );
};

export default TopNews;