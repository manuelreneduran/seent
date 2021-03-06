import React from "react";
import SaveArticleButton from "./SaveArticleButton";
import PropTypes from "prop-types";
import { Container, Row, Col, Image } from "react-bootstrap";
import Moment from "moment";

const TopMiniArticle = ({
  title,
  url,
  content,
  urlToImage,
  author,
  source,
  publishedAt,
}) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <a data-test="component-top-mini-article" target="_blank" href={url}>
            <h5>{title}</h5>
          </a>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <a target="_blank" href={url}>
            <Image fluid src={urlToImage} />
          </a>
        </Col>
        <Col lg={8}>
          {source ? (
            <p
              data-test="article-source"
              className="mb-1"
              style={{ fontSize: ".75em" }}
            >
              <strong>{source}</strong>
            </p>
          ) : null}
          {author ? (
            <p
              data-test="article-author"
              className="mb-1"
              style={{ fontSize: ".75em" }}
            >
              By {author}
            </p>
          ) : null}
          {publishedAt ? (
            <p
              data-test="article-published-at"
              className="text-muted mb-1"
              style={{ fontSize: ".75em" }}
            >
              {Moment(publishedAt).fromNow()}
            </p>
          ) : null}
          {content ? (
            <p style={{ fontSize: "1em" }}>
              {content.split(" ").slice(0, 20).join(" ") + "..."}
            </p>
          ) : null}
          <SaveArticleButton
            title={title}
            urlToImage={urlToImage}
            url={url}
            content={content}
            source={source}
            author={author}
            publishedAt={publishedAt}
          />
        </Col>
      </Row>
    </Container>
  );
};

TopMiniArticle.propTypes = {
  title: PropTypes.string,
  urlToImage: PropTypes.string,
  url: PropTypes.string,
  content: PropTypes.string,
  source: PropTypes.string,
  author: PropTypes.string,
  publishedAt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]),
};

export default TopMiniArticle;
