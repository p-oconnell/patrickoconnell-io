exports.query = `{
  projects {
    id
    sort
    title
    slug
    workType
    description
    heroImage{
      url
      altText
    }
    thumbnailImage{
      url
      altText
    }
    galleryImage{
      url
      altText
    }
  }
}`
