import React from 'react'
import { Link } from 'gatsby'
import FeaturedTitle from '../components/featured-title'
import FeaturedImg from '../components/fearured-img'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'

const Outer = styled.article`
  width: 100%;
  padding: 0 3%;
  margin-bottom: 114px;
  @media (min-width: 1300px) {
    padding: 0 10.41%;
  }
  @media (max-width: 600px) {
    margin-bottom: 36px;
  }
`

const Wrap = styled(Link)`
  display: flex;
  flex-direction: row;
  margin-bottom: 114px;
  :nth-of-type(even) {
    flex-direction: row-reverse;
    @media (max-width: 850px) {
      flex-direction: column;
    }
  }
  &:hover .featuredtitle-hover,
  &:hover .featuredimg-hover {
    border: solid 2px #98cc84;
    transition: border 100ms ease;
  }
  @media (max-width: 850px) {
    flex-direction: column;
    margin-bottom: 36px;
  }
`

const Featured = () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        allProject(limit: 3, sort: { fields: [sort], order: ASC }) {
          edges {
            node {
              heroImage {
                url
                handle
                altText
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
          <Wrap key={index} to={node.slug}>
            <FeaturedImg
              src={node.heroImage.url}
              handle={node.heroImage.handle}
              alt={node.heroImage.altText}
            />
            <FeaturedTitle
              hoverClass="featuredtitle-hover"
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

export default Featured
