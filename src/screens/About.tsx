import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { COLORS } from '../constants/light';
import { USERS } from '../constants/mocks';

const About = () => {

  const renderItem = ({ item }) => (
    <View style={styles.userBox}>
      <Image style={styles.avatar} source={{ uri: item.avatar }} />
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userDepartment}>{item.department}</Text>
      <View style={styles.statsContainer}>
        <Text style={styles.stat}>{item.stats.posts} posts</Text>
        <Text style={styles.stat}>{item.stats.followers} followers</Text>
        <Text style={styles.stat}>{item.stats.following} following</Text>
      </View>
      <View style={styles.socialContainer}>
        <Text style={styles.socialIcon}>Twitter: {item.social.twitter}</Text>
        <Text style={styles.socialIcon}>Dribbble: {item.social.dribbble}</Text>
      </View>
      <Text style={styles.about}>{item.about}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={USERS}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'COLORS.secondary',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  userBox: {
    backgroundColor: '#FFF',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    color: '#343A40',
  },
  userDepartment: {
    color: '#6C757D',
    marginBottom: 10,
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  stat: {
    fontWeight: 'bold',
    color: '#343A40',
    fontSize: 16,
  },
  socialContainer: {
    marginBottom: 10,
  },
  socialIcon: {
    color: '#6C757D',
    fontSize: 16,
  },
  about: {
    lineHeight: 20,
    color: '#343A40',
  },
});

export default About;