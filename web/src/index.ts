// import { UserEdit } from './views/UserEdit';
// import { User } from './models/User';

// const user = User.buildUser({ name: 'NAME', age: 20 });

// const root = document.getElementById('root');

// if (root) {
//   const userEdit = new UserEdit(root, user);

//   userEdit.render();

//   console.log(userEdit);
// } else {
//   throw new Error('Root element not found');
// }

import { UserList } from './views/UserList';
import { User } from './models/User';

const users = User.buildUserCollection();

users.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
