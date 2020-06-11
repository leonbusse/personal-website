import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import "./index-page.scss";
import "../components/TransitionStyles.scss";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { useScrollThreshold } from "../utils/hooks";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Intro = ({ intro }) => {
  const hideIntro = useScrollThreshold(window.innerHeight);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
      console.log("is mounted now");
    }, 1400);
  });

  const ProfilePicture = (otherProps) => (
    <div className="profile-picture-wrapper" {...otherProps}>
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
  );

  const animatedItems = [
    <h2 style={{ transitionDelay: "100ms" }} className="greeting">
      {intro.greeting}
    </h2>,
    <h1 style={{ transitionDelay: "200ms" }} className="maintitle">
      {intro.name}
    </h1>,
    <h2 style={{ transitionDelay: "300ms" }} className="subtitle">
      {intro.tagline}
    </h2>,
    <ProfilePicture style={{ transitionDelay: "400ms" }} />,
    <p style={{ transitionDelay: "500ms" }} className="about">
      {intro.about}
    </p>,
    <div className="contact" style={{ transitionDelay: "600ms" }}>
      <Button>{intro.contactButton}</Button>
    </div>,
  ];

  return (
    <section className={"intro-section" + (hideIntro ? " hidden" : "")}>
      <TransitionGroup component={null}>
        {isMounted &&
          animatedItems.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={1000}>
              {item}
            </CSSTransition>
          ))}
      </TransitionGroup>
    </section>
  );
};

export const IndexPageTemplate = ({ intro, about }) => {
  const tech = about.what.tech.split(", ");
  return (
    <div className="index-page">
      <div style={{ height: "6em" }} />
      <Intro intro={intro} />
      <div className="intro-section-placeholder" />
      <section className="about-section card">
        <div className="container">
          <h2>{about.who.title}</h2>
          <p>{about.who.text}</p>
          <div style={{ height: "6em" }} />
          <h2>{about.what.title}</h2>
          <p>{about.what.text}</p>
          <ul className="tech-container">
            {tech.map((str) => (
              <li>{str}</li>
            ))}
          </ul>
          <div style={{ height: "6em" }} />
          <h2>{about.experience.title}</h2>
          <p>Lorem ipsum...</p>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  intro: PropTypes.object.isRequired,
  about: PropTypes.string.isRequired,
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
      frontmatter: PropTypes.object,
    }),
  }),
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
            tech
          }
          experience {
            title
          }
        }
      }
    }
  }
`;
