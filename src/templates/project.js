import React, { useEffect } from 'react'
import Layout from '../components/layout'
import Gallery from '../components/gallery'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'react-emotion'

import background from '../images/diag-lines.svg'

const Article = styled.article`
  margin: 0 10.41%;
`

const MainImgWrap = styled.div`
  width: 100%;
  border: solid 2px #e5e5e5;
  height: 74vh;
  padding: 5vh;
  background: url(${background});
  @media (max-width: 420px) {
    background: none;
    border: none;
    padding: 0;
    height: auto;
  }
  img {
    display: block;
    max-height: 100%;
    margin: 0 auto;
    object-fit: contain;
    @media (max-width: 420px) {
      width: 100%;
    }
  }
`

const TitleWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  margin: 0 23px 23px 23px;
  @media (max-width: 420px) {
    margin: 0 0 23px 0;
  }
`

const ProjectTitle = styled.h1`
  font-weight: 600;
  font-size: ${props => props.theme.txtlrg};
`

const Work = styled.h2`
  font-weight: 400;
  font-size: ${props => props.theme.txtlrg};
  span {
    font-style: italic;
  }
`

const DescriptionWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  width: 100%;
  justify-content: center;
  margin-bottom: 114px;
  div {
    width: 750px;
    margin: 23px auto 0;
  }
  p {
    font-weight: 400;
    line-height: 156%;
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
        <title>{"Patrick O'Connell - " + data.project.title}</title>
      </Helmet>
      <Article>
        <TitleWrap>
          <ProjectTitle>{data.project.title}&nbsp;</ProjectTitle>
          <Work>
            (<span>{data.project.workType}</span>)
          </Work>
        </TitleWrap>
        <div>
          <MainImgWrap>
            <img src={data.project.heroImage.url} />
          </MainImgWrap>
          <Gallery
            galleryImage={data.project.galleryImage}
            heroThumb={data.project.heroImage.url}
          />
        </div>
        <DescriptionWrap>
          <div dangerouslySetInnerHTML={createMarkup()} />
        </DescriptionWrap>
      </Article>
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
