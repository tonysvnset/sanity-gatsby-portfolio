export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f3f23e37110416ac78419f2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bz7ohtc2',
                  apiId: 'ab156a46-5fd1-43cf-9b3c-82dadf4e9b67'
                },
                {
                  buildHookId: '5f3f23e3ec569687a90f735d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9k32p5uo',
                  apiId: 'f0a70a83-22ac-4e65-bc4d-f3af8bae4159'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tonysvnset/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9k32p5uo.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
