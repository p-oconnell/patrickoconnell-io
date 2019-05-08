import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'react-emotion'

const Outer = styled.article`
  width: 100%;
  padding: 0 50px;
`
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 114px;
`
const HeroLnk = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const HeroPicWrap = styled.div`
    width: calc(100%/3*2);
    padding-right: 25px;
`
const HeroNameWrap = styled.div`
    width: calc(100%/3);
    padding-left: 25px;
`

const HeroPic = styled.picture`
  margin-right: 50px;
  img {
    border: 2px ${props => props.theme.bicblue} solid;
    width:100%
  }
`
const HeroName = styled.h2`
  width: 100%;
  font-weight: 200;
  font-size: ${props => props.theme.txtlrg};
  margin-top: ${props => props.theme.txtbdy};
  z-index: 150;
`
const HeroType = styled.h4`
    font-size: ${props => props.theme.txtsm};
    font-weight: 200;
    font-style: italic;
`
const HeroClientDescription = styled.div`
    font-size: ${props => props.theme.txtmd};
    font-weight: 200;
    margin-top: ${props => props.theme.txtlrg};
`

const Hero = () => (
  <StaticQuery
    query={graphql`
        query HeroQuery {
            allProject(limit: 2, sort: {fields: [projectOrder], order: ASC}) {
                edges {
                    node {
                        projectHero {
                            url
                        }
                        projectTitle
                        projectSlug
                        projectClientDescription
                        projectType
                        projectOrder
                    }
                }
            }
        }
    `}
    render={data => (
      <Outer>
      {data.allProject.edges.map(({ node }, index) => (
        <Wrap>
            <HeroPicWrap>
              <HeroLnk to={'/' + node.projectSlug}>
                <HeroPic>
                  <img src={node.projectHero.url} alt={node.projectTitle} />
                </HeroPic>
              </HeroLnk>
          </HeroPicWrap>
          <HeroNameWrap>
              <HeroLnk to={'/' + node.projectSlug}>
                <HeroName>{node.projectTitle}</HeroName>
                <HeroType>{node.projectClientDescription}</HeroType>
                <HeroClientDescription>{node.projectType}</HeroClientDescription>
              </HeroLnk>
          </HeroNameWrap>
        </Wrap>
        ))}
      </Outer>
    )}
  />
)

export default Hero
