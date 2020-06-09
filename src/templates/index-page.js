import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import "./index-page.scss";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { useScrollThreshold } from "../utils/hooks";

export const IndexPageTemplate = ({ intro, about }) => {
  const hideIntro =
    typeof window == "undefined"
      ? false
      : useScrollThreshold(window.innerHeight);
  return (
    <div className="index-page">
      <div style={{ height: "6em" }} />
      <section className={"intro-section" + (hideIntro ? " hidden" : "")}>
        <h2 className="greeting">{intro.greeting}</h2>
        <h1 className="maintitle">{intro.name}</h1>
        <h2 className="subtitle">{intro.tagline}</h2>
        <div className="profile-picture-wrapper">
          <img
            className="profile-picture"
            src={
              !!intro.image.image.childImageSharp
                ? intro.image.image.childImageSharp.fluid.src
                : intro.image.image
            }
            alt={intro.image.alt}
          ></img>
        </div>
        <p className="about">{intro.about}</p>
        <Button className="contact">{intro.contactButton}</Button>
      </section>
      <div className="intro-section-placeholder" />
      <section className="about-section card">
        <div className="container">
          <h2>{about.who.title}</h2>
          <p>{about.who.text}</p>
          <div style={{ height: "6em" }} />
          <h2>{about.what.title}</h2>
          <p>{about.what.text}</p>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  intro: PropTypes.shape({
    greeting: PropTypes.string,
    name: PropTypes.string,
    tagline: PropTypes.string,
    image: PropTypes.shape({
      image: PropTypes.object,
      alt: PropTypes.string
    })
  }),
  about: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate intro={frontmatter.intro} about={frontmatter.about} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        intro {
          greeting
          name
          tagline
          image {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          about
          contactButton
        }
        about {
          who {
            title
            text
          }
          what {
            title
            text
          }
        }
      }
    }
  }
`;
