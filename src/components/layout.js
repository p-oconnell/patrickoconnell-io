import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'
import { injectGlobal } from 'emotion'
import Header from './header'
import Footer from './footer'

require('typeface-eb-garamond')

injectGlobal`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
* {
  box-sizing: border-box;
}
html {
    font-size: 26px;
    background-color: #424242;
}
body {
    font-family: "EB Garamond", serif;
    color: #e5e5e5;
}
a {
    color: #e5e5e5;
    text-decoration: none;
}
  @media (max-width: 420px) {
      html {
          font-size: 19px
      }
  }
`

const theme = {
  charcoal: '#454545',
  whisper: '#d0d0d0',
  txtxlrg: '2.2rem',
  txtlrg: '1.807rem',
  txtmd: '1.42rem',
  border: 'solid 2px #d0d0d0',
  borderMobile: 'solid 2px #d0d0d0',
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
            <body id="top" />
          </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div>{children}</div>
          <Footer />
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
