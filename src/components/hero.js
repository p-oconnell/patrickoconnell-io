import React from 'react'
import FeaturedTitle from '../components/hero-title'
import FeaturedImg from '../components/fearured-img'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'

const Outer = styled.article`
  width: 100%;
  padding: 0 10.41%;
  margin-bottom: 114px;
  @media (max-width: 420px) {
    margin-bottom: 36px;
  }
`
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 114px;
  :nth-of-type(even) {
    flex-direction: row-reverse;
    @media (max-width: 420px) {
      flex-direction: column;
    }
  }
  @media (max-width: 420px) {
    flex-direction: column;
    margin-bottom: 36px;
  }
`

const Hero = () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        allProject(limit: 3, sort: { fields: [sort], order: ASC }) {
          edges {
            node {
              heroImage {
                url
              }
              id
              title
              slug
              industry
              description
              workType
              sort
            }
          }
        }
      }
    `}
    render={data => (
      <Outer>
        {data.allProject.edges.map(({ node }, index) => (
          <Wrap key={index}>
            <FeaturedImg
              slug={node.slug}
              src={node.heroImage.url}
              alt={node.altText}
            />
            <FeaturedTitle
              slug={node.slug}
              title={node.title}
              workType={node.workType}
              industry={node.industry}
            />
          </Wrap>
        ))}
      </Outer>
    )}
  />
)

export default Hero
