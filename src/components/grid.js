import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'
import './grid.css';

const  GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 12.5%);
    grid-template-rows: repeat(3, 250px);
`

const Grid = () => (
  <StaticQuery
    query={graphql`
      query GridQuery {
        allProject(skip: 1, limit: 6, sort: { fields: [projectOrder], order: ASC }) {
          edges {
            node {
              projectHero {
                url
              }
              projectTitle
              projectSlug
            }
          }
        }
      }
    `}
    render={data => (
      <GridWrapper>
        {data.allProject.edges.map(({ node }, index) => (
          <div
            className={'proj' + index}

            key={index}
          >
            <span>{node.projectHero.url}</span>
            <span
              style={{
                fontSize: '2.25rem',
                paddingTop: 16,
                paddingBottom: 16,
                display: 'block',
              }}
            >
              {node.projectTitle}
            </span>
            <span>{node.projectSlug}</span>
          </div>
        ))}
      </GridWrapper>
    )}
  />
)

export default Grid
