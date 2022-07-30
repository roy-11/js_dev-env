function getQueryStringParameterByName(name, url) {
  // eslint-disable-next-line no-param-reassign
  if (!url) url = window.location.href;
  // eslint-disable-next-line no-param-reassign
  name = name.replace(/[[]]/g, '\\$&');
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi')
    ? 'http://localhost:3001/'
    : 'https://demo-api-01.herokuapp.com/';
}
