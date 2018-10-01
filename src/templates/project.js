import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

const showdown = require('showdown')
const converter = new showdown.Converter()

export default ({ data }) => {
  const description = converter.makeHtml(data.project.projectDescription)

  function createMarkup() {
    return { __html: description }
  }

  return (
    <Layout>
      <Helmet title={'Patrick O\'Connell - ' + data.project.projectTitle} />
      <div>{data.project.projectTitle}</div>
      <div>
        {data.project.projectImg.map(({ url }, index) => (
          <div style={{ paddingTop: '20px' }} key={index}>
            <span
              style={{
                fontSize: '2.25rem',
                paddingTop: 16,
                paddingBottom: 16,
                display: 'block',
              }}
            >
              {url}
            </span>
          </div>
        ))}
      </div>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </Layout>
  )
}

export const ProjectPageQuery = graphql`
  query getProjectById($id: String!) {
    project(id: { eq: $id }) {
      id
      projectOrder
      projectSlug
      projectTitle
      projectDescription
      projectMediums
      projectImg {
        fileName
        url
      }
    }
  }
`
