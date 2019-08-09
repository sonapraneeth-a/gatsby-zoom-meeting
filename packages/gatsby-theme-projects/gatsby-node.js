const { createFilePath } = require(`gatsby-source-filesystem`);

let contentPath = "content";

exports.createSchemaCustomization = ({actions}) => {
  actions.createTypes(`
    interface Project @nodeInterface {
      id: ID!
      dateStarted: Date!
      dateCompleted: Date!
      coverImage: File!
      slug: String!
    }
    type ProjectMdx implements Project & Node {
      id: ID!
      dateStarted: Date!
      dateCompleted: Date!
      coverImage: File!
      slug: String!
    }
  `);
};

// Create fields for post slugs and source
// This will change with schema customization with work
exports.onCreateNode = ({ node, actions, getNode, createNodeId }) => {
  const { createNode, createParentChildLink } = actions
  console.log(node.internal.type);
  // Make sure it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return
  }

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName
  console.log(source);
  console.log(contentPath);

  if (node.internal.type === `Mdx` && source === contentPath) {
    const slug = createFilePath({
      node: fileNode,
      getNode,
      basePath: contentPath,
    })

    const fieldData = {
      dateStarted: node.frontmatter.dateStarted,
      dateCompleted: node.frontmatter.dateCompleted,
      slug,
      coverImage: node.frontmatter.coverImage || "",
    }
    createNode({
      ...fieldData,
      // Required fields.
      id: createNodeId(`${node.id} >>> ProjectMdx`),
      parent: node.id,
      children: [],
      internal: {
        type: `ProjectMdx`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(fieldData))
          .digest(`hex`),
        content: JSON.stringify(fieldData),
        description: `Blog Posts`,
      },
    })
    createParentChildLink({ parent: fileNode, child: node })
  }
};


// exports.createPages = {

// }
