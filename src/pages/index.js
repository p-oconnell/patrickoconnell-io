import React from 'react'

import Layout from '../components/layout'
import Featured from '../components/featured'
import Grid from '../components/grid'

export default ({ data }) => {
  const gradient = {
    background: 'linear-gradient(180deg, #424242 45.73%, #98CC84 100%)',
  }

  return (
    <Layout>
      <div style={gradient}>
        <Featured />
        <Grid />
      </div>
    </Layout>
  )
}
