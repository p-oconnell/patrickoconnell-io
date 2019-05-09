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

const Hero = () => (
  <StaticQuery
    query={graphql`
        query HeroQuery {
            allProject(limit: 2, sort: {fields: [sort], order: ASC}) {
                edges {
                    node {
                        heroImage {
                            url
                        }
                        title
                        slug
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
        <Wrap>
            <HeroPicWrap>
              <HeroLnk to={'/' + node.slug}>
                <HeroPic>
                  <img src={node.heroImage.url} alt={node.altText} />
                </HeroPic>
              </HeroLnk>
          </HeroPicWrap>
          <HeroNameWrap>
              <HeroLnk to={'/' + node.slug}>
                <HeroName>{node.title}</HeroName>
                <HeroType>{node.workType}</HeroType>
              </HeroLnk>
          </HeroNameWrap>
        </Wrap>
        ))}
      </Outer>
    )}
  />
)

export default Hero
