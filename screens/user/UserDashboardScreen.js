import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import UserListItem from '../../components/user/UserListItem';
let userPoints;

const UserDashboardScreen = props => {
  const users = useSelector(state => state.users.allUsers);

  const genNum = () => {
    return (userPoints = Math.random() * (4000 - 0));
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
          onViewDetail={() => {
            props.navigation.navigate('UserDetail', {
              userId: itemData.item.id,
              userName: itemData.item.name,
              points: parseInt(userPoints)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            });
          }}
        />
      )}
    />
  );
};

UserDashboardScreen.navigationOptions = {
  headerTitle: 'Dashboard'
};

export default UserDashboardScreen;
