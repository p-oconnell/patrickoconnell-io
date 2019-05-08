import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'react-emotion'

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: linear-gradient(#BCDADA, #98CC84);
  padding: 86px 25px 0;
`
const GridTitle = styled.h4`
    text-decoration: none;
    font-size: ${props => props.theme.txtmd};
    font-weight: 200;
    font-style: italic;
    margin-top: 1rem;
    margin-left: 0.5rem;
`

const GridHero = styled.picture`
  width: 100%;
  img {
    border: 2px ${props => props.theme.bicblue} solid;
    width: 100%;
  }
`
const Article = styled.article`
    padding: 0 25px 92px;
    width: calc(100%/3);
    a {
        text-decoration: none;
        color: ${props => props.theme.bicblue};
        :hover {
            text-decoration: underline;
        }
    }
`

const Grid = () => (
  <StaticQuery
    query={graphql`
        query GridQuery {
    allMySqlResults(skip: 2, limit: 6, sort: {fields: [project_id], order: ASC}) {
      edges {
        node {
          title
          slug
          description
        }
      }
    }
  }

    `}
    render={data => (
      <GridWrapper>
        {data.allMySqlResults.edges.map(({ node }, index) => (
          <Article
            key=
            {index}>
            <Link to={'/' + node.slug}>
              <GridHero>
                <img src={node.slug} alt={node.title} />
              </GridHero>
              <GridTitle>{node.title}</GridTitle>
            </Link>
          </Article>
        ))}
      </GridWrapper>
    )}
  />
)

export default Grid
