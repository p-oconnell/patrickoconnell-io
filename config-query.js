exports.query = `{
  projects {
    id
    projectOrder
    projectSlug
    projectTitle
    projectClientDescription
    projectType
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
