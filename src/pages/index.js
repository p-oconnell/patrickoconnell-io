import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Grid from '../components/grid'

import styled from 'react-emotion'

const TaglineWrapper = styled.div `
        display: flex;
        justify-content: center;
        margin: 35px 0 110px;
`
const Tagline = styled.div `
    font-size: ${props => props.theme.txtmd};
    font-weight: 200;
    line-height: 113%;
    width: calc(100% / 3 * 2);
`

export default ({ data }) => {
  return (
    <Layout>
      <div>
      <TaglineWrapper>
          <Tagline>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra ipsum sed sapien dictum, ut tincidunt nisi.
          </Tagline>
      </TaglineWrapper>
        <Hero />
        <Grid />
      </div>
    </Layout>
  )
}
