module.exports = {
    siteMetadata: {
        title: "Patrick O'Connell",
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-mysql`,
            options: {
                connectionDetails: {
                    host: 'localhost',
                    user: 'root',
                    password: 'root',
                    database: 'poconnell'
                },
                query: 'SELECT * FROM project',
                idFieldName: 'project_id'
            }
        },
        {
            resolve: `gatsby-plugin-emotion`,
            options: {
                "sourceMap": true,
                "autoLabel": true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-offline',
    ],
}
