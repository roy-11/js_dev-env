import 'whatwg-fetch';

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}

function get(url) {
  return fetch(url).then(onSuccess, onError);
}

// eslint-disable-next-line import/prefer-default-export
export function getUsers() {
  return get('users');
}
