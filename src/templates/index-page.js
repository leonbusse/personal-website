import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import "./index-page.scss";
import "../components/TransitionStyles.scss";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { useScrollThreshold, useScrollReveal } from "../utils/hooks";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Hero = ({ hero }) => {
  const hideHero = useScrollThreshold();

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
          !!hero.image.image.childImageSharp
            ? hero.image.image.childImageSharp.fluid.src
            : hero.image.image
        }
        alt={hero.image.alt}
      ></img>
    </div>
  );

  const animatedItems = [
    <h2 style={{ transitionDelay: "100ms" }} className="greeting">
      {hero.greeting}
    </h2>,
    <h1 style={{ transitionDelay: "200ms" }} className="maintitle">
      {hero.name}
    </h1>,
    <h2 style={{ transitionDelay: "300ms" }} className="subtitle">
      {hero.tagline}
    </h2>,
    <ProfilePicture style={{ transitionDelay: "400ms" }} />,
    <p style={{ transitionDelay: "500ms" }} className="about">
      {hero.about}
    </p>,
    <div className="contact" style={{ transitionDelay: "600ms" }}>
      <Button>{hero.contactButton}</Button>
    </div>,
  ];

  return (
    <section className={"hero" + (hideHero ? " hidden" : "")}>
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

const Section = ({ children }) => {
  const revealContaienrRef = useScrollReveal();
  return <section ref={revealContaienrRef}>{children}</section>;
};

export const IndexPageTemplate = ({ hero, about }) => {
  const tech = about.what.tech.split(", ");
  return (
    <div className="index-page">
      {/* <div style={{ height: "6em" }} /> */}
      <Hero hero={hero} />
      <div className="hero-placeholder" />
      <div className="card">
        <div className="container">
          <Section>
            <h2>{about.who.title}</h2>
            <p>{about.who.text}</p>
          </Section>
          <Section>
            <h2>{about.what.title}</h2>
            <p>{about.what.text}</p>
            <ul className="tech-container">
              {tech.map((str) => (
                <li>{str}</li>
              ))}
            </ul>
          </Section>
          <Section>
            <h2>{about.experience.title}</h2>
            <p>Lorem ipsum...</p>
          </Section>
        </div>
      </div>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  hero: PropTypes.object.isRequired,
  about: PropTypes.string.isRequired,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate hero={frontmatter.hero} about={frontmatter.about} />
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
        hero {
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
