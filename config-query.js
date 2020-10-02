exports.query = `{
  projects {
    id
    sort
    title
    slug
    industry
    workType
    description
    heroImage{
      url
      handle
      altText
    }
    galleryImage{
      url
      handle
      altText
    }
  }
}`
