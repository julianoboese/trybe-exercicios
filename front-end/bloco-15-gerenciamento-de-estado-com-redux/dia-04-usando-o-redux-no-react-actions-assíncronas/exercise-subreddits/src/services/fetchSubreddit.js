export default async function fetchSubreddit(subredditName) {
  const apiResponse = await fetch(`https://www.reddit.com/r/${subredditName}.json`);
  const apiResponseJson = await apiResponse.json();
  return apiResponseJson.data.children;
}