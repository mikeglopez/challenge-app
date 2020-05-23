import USERS from '../../data/dummy-data';

const initialState = {
  allUsers: USERS,
  friendUsers: USERS.filter(user => Number(user.id.split('')[1]) < 4)
};

export default (state = initialState, action) => {
  return state;
};
