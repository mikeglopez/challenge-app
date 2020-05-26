import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Text,
  Image,
  StyleSheet,
  Platform
} from 'react-native';
import Colors from '../../constants/Colors';

const UserListItem = props => {
  const points = props.points ? props.points : 0;
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableCmp onPress={props.onViewDetail} useForeground>
      <View style={styles.user}>
        <Image style={styles.image} source={{ uri: props.image }} />
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.points}>
          {points} {points === 1 ? 'Point' : 'Points'}
        </Text>
      </View>
    </TouchableCmp>
  );
};

const styles = StyleSheet.create({
  user: {
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
    backgroundColor: Colors.secondary,
    height: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  image: {
    width: '25%',
    maxWidth: 75,
    height: '100%',
    borderRadius: 200,
    borderColor: Colors.lightGrellow,
    borderWidth: 3
  },
  name: {
    fontSize: 18,
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
