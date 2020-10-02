import React from 'react'
import Layout from '../components/layout'
import Slider from '../components/Slider'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'react-emotion'

const Article = styled.article`
  margin: 0 10.41%;
`

const TitleWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  margin: 0 23px 23px 0;
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
    margin: 1.5rem auto 0;
  }
  p {
    font-weight: 400;
    line-height: 156%;
    margin-bottom: 1.5rem;
  }
`

const showdown = require('showdown')
const converter = new showdown.Converter()

export default ({ data }) => {
  const galleryImages = data.project.galleryImage

  const images = galleryImages.map(galleryImages => galleryImages.handle)

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
        <Slider slides={images} />
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
        handle
        altText
      }
    }
  }
`
