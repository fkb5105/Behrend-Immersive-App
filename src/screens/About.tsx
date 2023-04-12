import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { USERS } from '../constants/mocks';
import { COLORS } from '../constants/light';

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Meet the Team</Text>
      {USERS.map((user) => (
        <View style={styles.card} key={user.id}>
          <Image style={styles.avatar} source={{ uri: user.avatar }} />
          <View style={styles.info}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.position}>{user.position}</Text>
            <Text style={styles.about}>{user.about}</Text>
          </View>
        </View>
      ))}
      <View style={styles.projectSection}>
        <Text style={styles.projectText}>
          See what else VAR Labs is working on
        </Text>
        <TouchableOpacity style={styles.visitButton} onPress={() => Linking.openURL('https://var.psu.edu/projects/')}>
          <Text style={styles.buttonText}>Visit Projects</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    width: '30%',
    height: '100%',
    borderRadius: 10,
    marginRight: 20,
  },
  info: {
    width: '70%',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  position: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  about: {
    fontSize: 14,
    lineHeight: 20,
  },
  projectSection: {
    alignItems: 'center',
    marginVertical: 20,
    margin: 10,
  },
  projectText: {
    fontSize: 24,
    fontWeight: 'bold',
    margin:10,
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  visitButton: {
    backgroundColor: COLORS.tertiary,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    marginTop: 4,
    padding: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default About;
