import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { COLORS } from '../constants/light';

interface AboutInfo {
  about_id: number;
  image_url: string;
  name: string;
  position: string;
  description: string;
}

const About = () => {
  const [aboutData, setAboutData] = useState<AboutInfo[]>([]);

  async function fetchAboutData() {
    try {
      const response = await fetch('http://146.186.8.211:8080/about');
      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Data:', data);
      setAboutData(data);
    } catch (error) {
      console.error('Error fetching about data:', error);
    }
  }
  

  useEffect(() => {
    fetchAboutData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Meet the Team</Text>
      {aboutData.map((about) => (
        <View style={styles.card} key={about.about_id}>
          <Image style={styles.avatar} source={{ uri: about.image_url }} />
          <View style={styles.info}>
            <Text style={styles.name}>{about.name}</Text>
            <Text style={styles.position}>{about.position}</Text>
            <Text style={styles.about}>{about.description}</Text>
          </View>
        </View>
      ))}
      <View style={styles.projectSection}>
        <Text style={styles.projectText}>See what else VAR Labs is working on</Text>
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
    backgroundColor: '#FFF',
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
});

export default About;
