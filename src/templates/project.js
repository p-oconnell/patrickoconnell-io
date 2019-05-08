import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'react-emotion'

const Gradient = styled.div`
height: 78vh;
width: 100%;
position: absolute;
top: 0;
left: 0;
overflow: hidden;
z-index: -100;
background: linear-gradient(#98CC84 55%, #DD975B);
`

const MainImgWrap = styled.div`
    width: calc(100%/6 * 4);
    height: 687px;
    background-color: #FFF;
    margin: ${props => props.theme.txtsm} auto 0;
    img {
        border: 2px ${props => props.theme.bicblue} solid;
        width: 100%;
        height: 100%;
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
const Client = styled.h3`
    font-weight: 200;
    font-size: ${props => props.theme.txtsm};
    font-style: italic;
    margin-top: 0.5rem;
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

const showdown = require('showdown')
const converter = new showdown.Converter()

export default ({ data }) => {
  const description = converter.makeHtml(data.mySqlResults.description)

  function createMarkup() {
    return { __html: description }
  }

  return (
    <Layout>
      <Helmet>
        <title>{'Patrick O\'Connell - ' + data.mySqlResults.title}</title>
        </Helmet>
    <Gradient />
    <MainImgWrap>
        <img src={data.mySqlResults.slug} />
    </MainImgWrap>
    <TitleWrap>
    <div>
      <ProjectTitle>{data.mySqlResults.title}</ProjectTitle>
      <Client>{data.mySqlResults.work_type}</Client>
    </div>
    <div>
       <Work>{data.mySqlResults.work_type}</Work>
     </div>
    </TitleWrap>
    <DescriptionWrap>
        <div dangerouslySetInnerHTML={createMarkup()} />
     </DescriptionWrap>
    </Layout>
  )
}

export const ProjectPageQuery = graphql`
  query getMySqlResultsById($id: String!) {
    mySqlResults(id: { eq: $id }) {
      id
      rank
      slug
      description
      work_type
      title
    }
  }
`
