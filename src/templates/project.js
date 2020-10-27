import React, { useEffect } from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import GalleryItem from '../components/gallery-item'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'react-emotion'

import lightbox from '../components/lightbox'
import '../components/lightbox.scss'

const Article = styled.article`
  margin: 0 3%;
  @media (min-width: 1300px) {
    padding: 0 10.41%;
  }
  @media (max-width: 600px) {
    margin: 0 3%;
  }
`

const Text = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const TitleWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50%;
  padding-right: 1rem;
  @media (max-width: 800px) {
    margin: 15px 0 15px 0;
    width: 100%;
  }
`

const Title = styled.h1`
  margin: 50px 0 11px;
  font-variation-settings: 'wght' 600;
  font-size: ${props => props.theme.txtxlrg};
  @media (max-width: 600px) {
    margin: 15px 0 6px;
  }
`

const Industry = styled.h2`
  font-weight: 400;
  font-size: ${props => props.theme.txtlrg};
  font-style: italic;
  margin-bottom: 52px;
  @media (max-width: 600px) {
    margin-bottom: 15px;
  }
`

const WorkType = styled.h2`
  font-variation-settings: 'wght' 400;
  font-size: ${props => props.theme.txtlrg};
`

const DescriptionWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  width: 50%;
  justify-content: flex-start;
  margin: 75px 0 75px;
  div {
    max-width: 750px;
  }
  p {
    font-weight: 100;
    line-height: 156%;
    margin-bottom: 1.05rem;
  }
  @media (max-width: 800px) {
    width: 100%;
    margin: 25px 0;
  }
`

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 45px;
`

const showdown = require('showdown')
const converter = new showdown.Converter()

export default ({ data }) => {
  const description = converter.makeHtml(data.project.description)

  function createMarkup() {
    return { __html: description }
  }

  const [mainImg, ...gallery] = data.project.galleryImage

  const gallerySize = gallery.length

  useEffect(() => {
    if (typeof window !== 'undefined') {
      lightbox()
    }
  })

  return (
    <Layout>
      {console.log(mainImg.handle)}
      <Helmet>
        <title>{"Patrick O'Connell - " + data.project.title}</title>
      </Helmet>
      <Article>
        <Hero handle={mainImg.handle} alt={mainImg.alt} />
        <Text>
          <TitleWrap>
            <Title>{data.project.title}&nbsp;</Title>
            <Industry>{data.project.industry}</Industry>
            <WorkType>{data.project.workType}</WorkType>
          </TitleWrap>
          <DescriptionWrap>
            <div dangerouslySetInnerHTML={createMarkup()} />
          </DescriptionWrap>
        </Text>
        {gallerySize > 0 && (
          <Gallery>
            {gallery.map(({ handle, altText }, key) => (
              <GalleryItem
                key={key}
                handle={handle}
                alt={altText}
                isFull={false}
              />
            ))}
          </Gallery>
        )}
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
      industry
      workType
      heroImage {
        url
        handle
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
