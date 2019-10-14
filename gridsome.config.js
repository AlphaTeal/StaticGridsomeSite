// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Joey Gore',
  siteDescription: 'Joey Gore\'s "professional" developer-facing website',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog/**/*.md',
        typeName: 'Post',
        route: '/blog/:year/:month/:day/:title',
      },
    },
  ],
}
