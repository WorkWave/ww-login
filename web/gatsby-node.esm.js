import path, { resolve } from "path"

async function turnContentIntoPages({ graphql, actions }) {
  const contentTemplate = path.resolve("./src/templates/Content.js")
  const { data } = await graphql(`
    query {
      content: allSanityLoginContent {
        nodes {
          _id
          title
          slug {
            current
          }
        }
      }
    }
  `)
  data.content.nodes.forEach(c => {
    actions.createPage({
      path: `/${c.slug.current}`,
      component: contentTemplate,
      context: {
        slug: c.slug.current,
      },
    })
  })
}

export async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([turnContentIntoPages(params)])
}
