import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import UserListItem from '../../components/user/UserListItem';

const UserDashboardScreen = props => {
  const users = useSelector(state => state.users.allUsers);

  const genNum = () => {
    return Math.random() * (4000 - 0);
  };

  return (
    <FlatList
      data={users}
      keyExtractor={user => user.id}
      renderItem={itemData => (
        <UserListItem
          image={itemData.item.imageUrl}
          name={itemData.item.name}
          points={parseInt(genNum())
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          onViewDetail={() => {}}
        />
      )}
    />
  );
};

UserDashboardScreen.navigationOptions = {
  headerTitle: 'Dashboard'
};

export default UserDashboardScreen;
