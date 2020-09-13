import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'
import { injectGlobal } from 'emotion'
import Header from './header'
import Footer from './footer'

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
    font-family: 'EB Garamond', serif;
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
  whisper: '#e5e5e5',
  txtlrg: '1.807rem',
  txtmd: '1.42rem',
  border: 'inset 15px #e5e5e5',
  borderMobile: 'inset 7px #e5e5e5',
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
            script={[
                {
                  defer: 'true',
                  src: 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js',
                  type: 'text/javascript',
                },
              {
                defer: 'true',
                src: '../../tothetop.js',
                type: 'text/javascript',
              }
            ]}
          >
            <html lang="en" />
            <link
              href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap"
              rel="stylesheet"
            />
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
