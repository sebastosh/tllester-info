// should be in assets/js/extract-links.js

export default function(data, layout) {
  if (!data.markdown) {
    return []
  }

  const links = [];

  // Regular expression to match href attributes
  const linkRegex = /href="([^"]*)"/g;

  let match;
  while ((match = linkRegex.exec(data.markdown)) !== null) {
    links.push(match[1]);
  }

  return links;
}