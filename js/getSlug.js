function getSlug(productName) {
  return productName
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 -]/g, '') 
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
}