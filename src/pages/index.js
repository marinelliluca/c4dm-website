import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import "../style/bulmacustom.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "../components/layout.js";
import Carousel from "../components/carousel";
import BlogCard from "../components/blogCard";
import Video from "../components/video";




const IndexPage = ({pageContext}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
    const data = useStaticQuery(graphql`
      {
        about: markdownRemark(
          fields: { category: { eq: "about" } }
          fileAbsolutePath: { regex: "/about.md/" }
        ) {
          html
          frontmatter {
            title
            video
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 400)
              }
            }
          }
        }
        projects: allMarkdownRemark(
          filter: { fields: { category: { eq: "projects" } } }
          sort: { frontmatter: { date: DESC } }
          limit: 6
        ) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              image {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
              title
              author
              date(formatString: "ddd DD MMM yy")
            }
            html
            id
          }
        }
        news: allMarkdownRemark(
          filter: { fields: { category: { eq: "news" } } }
          sort: { frontmatter: { date: DESC } }
          limit: 6
        ) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              image {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
              title
              author
              date(formatString: "ddd DD MMM yy")
            }
            html
            id
          }
        }
      }
    `);

    const projectCards = data.projects.nodes.map((project) => (
      <BlogCard
        title={project.frontmatter.title}
        author={project.frontmatter.author}
        date={project.frontmatter.date}
        image={project.frontmatter.image.childImageSharp.gatsbyImageData}
        html={project.html}
        slug={project.fields.slug}
      />
    ));

    const newsCards = data.news.nodes.map((news) => (
      <BlogCard
        title={news.frontmatter.title}
        author={news.frontmatter.author}
        date={news.frontmatter.date}
        image={news.frontmatter.image.childImageSharp.gatsbyImageData}
        html={news.html}
        slug={news.fields.slug}
      />
    ));

    const homeHero = (
      <section class="hero is-link is-fullheight-with-navbar">
        <div class="hero-body has-background-primary">
          <div className="column is-half">
          <p class="title is-size-1">
            Centre for Digital Music
          </p>
            <div
              dangerouslySetInnerHTML={{ __html: data.about.html }}
            ></div>
            </div>
          {/* ADD HERO IMAGE! */}
          {/* <br></br>
          <p class="subtitle">C4DM</p> */}
        </div>
      </section>);

  return (
    <Layout name="Homepage" hero={homeHero}>
      <section className="section">
        <section class="hero is-link is-fullwidth has-background-white">
            <Video videoSrcURL={data.about.frontmatter.video}/>
          </section>
        </section>
      <section className="section">
        <h2 className="title">
          <Link to="/news">News</Link>
          </h2>
        <div className="container">
          <Carousel content={newsCards} />
        </div>
      </section>
      <section className="section">
        <h2 className="title"> <Link to="/projects">Projects</Link></h2>
        <div className="container">
          <Carousel content={projectCards} />
        </div>
      </section>
      
    </Layout>
  );
}

export default IndexPage

export const Head = () => <title>Home Page</title>
