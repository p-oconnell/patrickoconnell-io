import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'react-emotion'

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-top: offset 15px #e5e5e5;
  padding: 0 3% 0;
  @media (min-width: 1300px) {
    padding: 0 10.41%;
  }
  @media (max-width: 600px) {
    padding-top: 36px;
  }
`
const GridHero = styled.div`
  height: 450px;
  margin: 0;
  @media (max-width: 600px) {
    height: 45vh;
  }
  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    @media (max-width: 600px) {
      height: 45vh;
    }
  }
`
const Article = styled.article`
  width: calc(33.33% - 16px);
  a {
    text-decoration: none;
    :hover {
      text-decoration: underline;
      color: #98cc84;
    }
  }
  @media (max-width: 1080px) {
    width: 100%;
    margin-bottom: 36px;
  }
`
const GridInfo = styled.div`
  padding: 1rem;
  color: #d0d0d0;
  line-height: 140%;
  background-color: #373737;
`
const GridTitle = styled.h4`
  text-decoration: none;
  font-size: 1.42rem;
  font-weight: 500;
`
const GridWorkType = styled.div`
  text-decoration: none;
  font-weight: 400;
`

const Grid = () => (
  <StaticQuery
    query={graphql`
      query GridQuery {
        allProject(skip: 3, limit: 3, sort: { fields: [sort], order: ASC }) {
          edges {
            node {
              heroImage {
                url
                altText
              }
              title
              workType
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <GridWrapper>
        {data.allProject.edges.map(({ node }, index) => (
          <Article key={index}>
            <Link to={'/' + node.slug}>
              <GridHero>
                <img src={node.heroImage.url} alt={node.altText} />
              </GridHero>
              <GridInfo>
                <GridTitle>{node.title}</GridTitle>
                <GridWorkType>{node.workType}</GridWorkType>
              </GridInfo>
            </Link>
          </Article>
        ))}
      </GridWrapper>
    )}
  />
)

export default Grid
