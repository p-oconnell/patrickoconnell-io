import React from 'react'

import Layout from '../components/layout'
import Featured from '../components/featured'
import Grid from '../components/grid'

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <Featured />
        <Grid />
      </div>
    </Layout>
  )
}
