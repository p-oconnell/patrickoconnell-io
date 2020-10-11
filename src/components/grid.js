import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'react-emotion'

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-top: offset 15px #e5e5e5;
  background: linear-gradient(#bcdada 45%, #86ac7a);
  padding: 114px 10.41% 0;
  @media (max-width: 420px) {
    padding-top: 36px;
  }
`
const GridTitle = styled.h4`
  text-decoration: none;
  font-size: 1.42rem;
  color: ${props => props.theme.charcoal};
`

const GridHero = styled.div`
  height: 450px;
  margin: 0;
  @media (max-width: 420px) {
    height: auto;
  }
  img {
    border: ${props => props.theme.border};
    width: 100%;
    height: 450px;
    object-fit: cover;
    transition: border 100ms ease;
    &:hover {
      border: inset 18px #d0d0d0;
      transition: border 100ms ease;
    }
    @media (max-width: 420px) {
      border: ${props => props.theme.borderMobile};
      height: 45vh;
    }
  }
`
const Article = styled.article`
  width: calc(33.33% - 16px);
  a {
    font-weight: 200;
    color: #454545;
    text-decoration: none;
    transition: font-weight 100ms ease-in, text-decoration 100ms ease-out;
    &:hover {
      color: #c3dede;
      transition: font-weight 100ms ease-in, text-decoration 100ms ease-in;
      font-family: sans-serif;
    }
  }
  @media (max-width: 420px) {
    width: 100%;
    margin-bottom: 36px;
  }
`

const GridWorkType = styled.div`
  color: ${props => props.theme.charcoal};
`

const GridInfo = styled.div`
  padding: 0.3rem 0.25rem;
  line-height: 140%;
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
