import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { COLORS } from '../constants/light';
import { USERS, SPONSOR } from '../constants/mocks';
import { ICONS } from '../constants/theme';

const About = () => {
  const handleLinkedInPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Special Thanks to:</Text>
      {SPONSOR.map((sponsor) => (
        <View style={styles.sponsorCard} key={sponsor.id}>
          <Text style={styles.sponsorName}>{sponsor.name}</Text>
          <Text style={styles.sponsorPosition}>{sponsor.position}</Text>
          <Text style={styles.sponsorCompany}>{sponsor.company}</Text>
        </View>
      ))}
      <Text style={styles.title}>Sponsor Statement:</Text>
      <Text style={styles.sponsorStatement}>
        We would also like to thank our generous sponsors, Dr. John M. Lilley and the International Paper Company, whose support helped facilitate the creation of this immersive application.
      </Text>
      <Text style={styles.title}>Meet the Team</Text>
      {USERS.map((user) => (
        <View style={styles.card} key={user.id}>
          <Image style={styles.avatar} source={{ uri: user.image_url }} />
          <View style={styles.info}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{user.name}</Text>
              {user.linkedIn_url && (
                <TouchableOpacity onPress={() => handleLinkedInPress(user.linkedIn_url)}>
                  <Image source={ICONS.LinkedIn} style={styles.linkedInIcon} />
                </TouchableOpacity>
              )}
            </View>
            <Text style={styles.position}>{user.position}</Text>
            <Text style={styles.about}>{user.description}</Text>
          </View>
        </View>
      ))}
      <View style={styles.projectSection}>
        <Text style={styles.projectText}>See what else VAR Labs is working on</Text>
        <TouchableOpacity
          style={styles.visitButton}
          onPress={() => Linking.openURL('https://var.psu.edu/projects/')}
        >
          <Text style={styles.buttonText}>Visit Projects</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
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
    flex: 1, // Added this to make the info view expand to fill the available space
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Aligns name and LinkedIn icon to the ends
    alignItems: 'center',
  },
  name: {
    flex: 1, // Added this to make the name take all the available space
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  linkedInIcon: {
    marginLeft: 5,
    width: 20,
    height: 20,
    resizeMode: 'contain',
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
    margin: 10,
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
  sponsorCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
    marginBottom: 40,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sponsorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sponsorPosition: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
  },
  sponsorCompany: {
    fontSize: 15,
  },
  sponsorStatement: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 40,
    textAlign: 'center',
  },
});

export default About;

