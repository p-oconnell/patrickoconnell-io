import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'react-emotion'

const MainImgWrap = styled.div`
    img {
        display: block;
        border: 2px ${props => props.theme.bicblue} solid;
        width: calc(100%/6 * 4);
        margin: ${props => props.theme.txtsm} auto 0;
    }
`

const TitleWrap = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-end;
    width: 100%;
    justify-content: center;
        div {
            width: calc(100%/6 * 2);
            padding-left: ${props => props.theme.txtsm};
        }
`

const ProjectTitle = styled.h1`
    font-weight: 200;
    font-size: ${props => props.theme.txtlrg};
    margin-top: ${props => props.theme.txtmd};
`

const Work = styled.h2`
    font-weight: 200;
    font-size: ${props => props.theme.txtmd};
    text-align: right;
`

const DescriptionWrap = styled.div`
display: flex;
flex-wrap: nowrap;
align-items: flex-end;
width: 100%;
justify-content: center;
    div {
        width: calc(100%/6 * 4);
        padding-right: calc(100%/6 * 1);
        margin-top: 1rem;
    }
    p {
        font-weight: 300;
        line-height: 156%;
        margin-top: .75rem;
    }
`

const Wrapper = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
`

const GalleryWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    width: calc(100%/6 * 4);
        div {
            width: calc(100%/2);
            margin: ${props => props.theme.txtsm} 0;
            :nth-of-type(odd) {
                padding-right: ${props => props.theme.txtsm};
            }
            :nth-of-type(even) {
                padding-left: ${props => props.theme.txtsm};
            }
        }
        img {
            width: 100%;
            border: 2px ${props => props.theme.bicblue} solid;
        }
`

const showdown = require('showdown')
const converter = new showdown.Converter()

export default ({ data }) => {
  const description = converter.makeHtml(data.project.description)

  function createMarkup() {
    return { __html: description }
  }

  return (
    <Layout>
      <Helmet>
        <title>{'Patrick O\'Connell - ' + data.project.title}</title>
        <style type="text/css">{`
            body {
                background: linear-gradient(to bottom, rgba(152,204,132,1) 0%, rgba(152,204,132,0.36) 64%, rgba(221,151,91,0.16) 84%, rgba(221,151,91,0) 100%) no-repeat;
                background-size: 100% 100vh;
            }`}</style>
    </Helmet>
    <article>
    <MainImgWrap>
        <img src={data.project.heroImage.url} />
    </MainImgWrap>
    <TitleWrap>
    <div>
      <ProjectTitle>{data.project.title}</ProjectTitle>
    </div>
    <div>
       <Work>{data.project.workType}</Work>
     </div>
    </TitleWrap>
    <DescriptionWrap>
        <div dangerouslySetInnerHTML={createMarkup()} />
     </DescriptionWrap>
     <Wrapper>
      <GalleryWrap>
        {data.project.galleryImage.map(({ url, altText }, index) => (
          <div key={index}>
            <img src={url} alt={altText} />
          </div>
        ))}
      </GalleryWrap>
      </Wrapper>
      </article>
    </Layout>
  )
}

export const ProjectPageQuery = graphql`
  query getProjectById($id: String!) {
    project(id: { eq: $id }) {
      id
      sort
      slug
      title
      description
      workType
      heroImage {
          url
          altText
      }
      galleryImage {
        url
        altText
      }
    }
  }
`
