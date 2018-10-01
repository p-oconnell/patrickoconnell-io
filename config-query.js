exports.query = `{
  projects {
    id
    projectOrder
    projectSlug
    projectTitle
    projectDescription
    projectMediums
    projectImg {
      fileName
      url
    }
    projectHero {
      fileName
      url
    }
  }
}`
