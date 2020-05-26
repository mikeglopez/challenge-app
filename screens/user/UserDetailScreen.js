import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

const passportNo = email => {
  const username = email.split('@')[0];
  let nmbr = '';
  for (let i = 0; i < username.length; i++) {
    nmbr += username[i].charCodeAt();
  }
  nmbr = nmbr.split('').splice(2, 9);
  return nmbr;
};

const formatDate = dt => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const date = new Date(dt);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();
  return `${day} ${month} ${year}`;
};

const UserDetailScreen = props => {
  const userId = props.navigation.getParam('userId');
  const selectedUser = useSelector(state =>
    state.users.allUsers.find(user => user.id === userId)
  );

  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  };

  return (
    <LinearGradient colors={['#F2F2F2', '#CCCCCC']}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>INTERNATIONAL PASSPORT</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: selectedUser.imageUrl }} />
        </View>
        <View style={styles.profileContent}>
          <View style={styles.col}>
            <View style={styles.row}>
              <Text>Name</Text>
              <Text style={{ fontWeight: 'bold' }}>
                {selectedUser.name.toUpperCase()}
              </Text>
            </View>
            <View style={styles.row}>
              <Text>Month of birth</Text>
              <Text style={{ fontWeight: 'bold' }}>
                {selectedUser.mob.toUpperCase()}
              </Text>
            </View>
            <View style={styles.row}>
              <Text>Place of residence</Text>
              <Text style={{ fontWeight: 'bold' }}>
                {selectedUser.location.toUpperCase()}
              </Text>
            </View>
            <View style={styles.row}>
              <Text>Sex</Text>
              <Text style={{ fontWeight: 'bold' }}>
                {selectedUser.sex.toUpperCase()}
              </Text>
            </View>
          </View>
          <View style={styles.col}>
            <View style={styles.row}>
              <Text>Passport No.</Text>
              <Text style={{ fontWeight: 'bold' }}>
                {passportNo(selectedUser.email)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text>Date of issue</Text>
              <Text style={{ fontWeight: 'bold' }}>
                {formatDate(selectedUser.createdAt).toUpperCase()}
              </Text>
            </View>
            <View style={styles.row}>
              <Text>Date of expiration</Text>
              <Text style={{ fontWeight: 'bold' }}>
                {formatDate(selectedUser.expiresAt).toUpperCase()}
              </Text>
            </View>
            <View style={styles.row}>
              <Text>Signature</Text>
              <Text style={{ fontFamily: 'homemade-apple', paddingLeft: 5 }}>
                {selectedUser.name}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.postitContainer}>
          <View style={styles.postit}>
            <Text style={styles.postitText}>{selectedUser.bio}</Text>
            <Text style={styles.points}>
              {props.navigation.getParam('points')} Points
            </Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

UserDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('userName')
  };
};

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    marginVertical: 30
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    width: '60%',
    height: 300
  },
  profileContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30
  },
  row: {
    marginVertical: 10
  },
  col: {
    overflow: 'visible'
  },
  postitContainer: {
    alignItems: 'center'
  },
  postit: {
    width: 275,
    height: 250,
    backgroundColor: '#FFFF88',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    margin: 25,
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
    elevation: 5,
    transform: [{ rotate: '-7deg' }]
  },
  postitText: {
    fontFamily: 'homemade-apple',
    fontSize: 18,
    paddingLeft: 5
  },
  points: {
    fontFamily: 'homemade-apple',
    fontSize: 22,
    paddingLeft: 5,
    marginTop: 22
  }
});

export default UserDetailScreen;
