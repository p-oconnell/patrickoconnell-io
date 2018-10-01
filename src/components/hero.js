import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'react-emotion'

const Outer = styled.article`
  width: 100%;
  height: 100%;
`
const Wrap = styled.div`
  min-height: 100%;
  position: relative;
`
const HeroLnk = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`
const HeroPic = styled.picture`
  width: 100%;
  object-fit: cover;
  height: 100vh;
  min-height: 100%;
  img {
    width: 100%;
    height: 60vh;
  }
`
const HeroName = styled.h2`
    font-family: 'Asul', sans-serif;
    font-size: 27px;
    position: absolute;
    bottom: 56px;
    left: 50px;
    color: white;
`

const Hero = () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        allProject(filter: { projectOrder: { eq: 1 } }) {
          edges {
            node {
              projectHero {
                url
              }
              projectTitle
              projectSlug
              projectOrder
            }
          }
        }
      }
    `}
    render={data => (
      <Outer>
        <Wrap>
          <HeroLnk to={'/' + data.allProject.edges[0].node.projectSlug}>
            <HeroPic>
              <img src={data.allProject.edges[0].node.projectHero.url} alt={data.allProject.edges[0].node.projectTile + ' Hero Image'}/>
            </HeroPic>
          </HeroLnk>
          <HeroName>
            {data.allProject.edges[0].node.projectTitle}
          </HeroName>
        </Wrap>
      </Outer>
    )}
  />
)

export default Hero
