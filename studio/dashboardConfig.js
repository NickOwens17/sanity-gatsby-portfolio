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
                  buildHookId: '5e9fa0284d8e1fa438427ea7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-1zf5d532',
                  apiId: '7d519e13-e1e9-4b2e-9964-370fa387d5ce'
                },
                {
                  buildHookId: '5e9fa028d2bad45b047f8209',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-uur7eyhf',
                  apiId: '20d2475a-9c39-4f0c-b42c-aa087ab5ee19'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NickOwens17/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-uur7eyhf.netlify.app',
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
