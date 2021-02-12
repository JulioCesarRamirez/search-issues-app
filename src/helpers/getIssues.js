export const getIssues = async (issue) => {
  const apiUrl = `https://api.github.com/search/issues?q=text+to+search+in:${encodeURIComponent(
    issue
  )}+repo:facebook/react&per_page=5`;
  const resp = await fetch(apiUrl);
  const { items } = await resp.json();

  const issues = items.map(({ title, url }) => {
    return {
      title,
      url,
    };
  });
  return issues;
};
