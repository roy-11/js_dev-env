/* eslint-disable no-debugger ,import/no-extraneous-dependencies */
import './index.css';
import { getUsers, deleteUser } from './api/userApi';

export default function sum(first, second) {
  return first + second;
}

// Populate table of users via API call.
getUsers().then((result) => {
  let usersBody = '';

  result.forEach((user) => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`;
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // Must use array.from to create a real array from a DOM collection
  // getElementsByClassname only returns an "array like" object
  // eslint-disable-next-line array-callback-return
  Array.from(deleteLinks, (link) => {
    // eslint-disable-next-line no-param-reassign
    link.onclick = (event) => {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes['data-id'].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
