import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const UserListItem = props => {
  const points = props.points ? props.points : 0;

  return (
    <View style={styles.user} onPress={props.onViewDetail}>
      <Image style={styles.image} source={{ uri: props.image }} />
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.points}>
        {points} {points === 1 ? 'Point' : 'Points'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
    backgroundColor: Colors.secondary,
    height: 100,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    width: '25%',
    maxWidth: 75,
    height: '100%',
    borderRadius: 200,
    marginVertical: 20
  },
  name: {
    fontSize: 18,
    marginVertical: 4,
    width: '42%',
    paddingLeft: 10
  },
  points: {
    fontSize: 18,
    color: Colors.darkGrellow,
    width: '30%'
  }
});

export default UserListItem;
