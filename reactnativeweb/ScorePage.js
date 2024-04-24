import React from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';


const ScorePage = ({ route, navigation4 }) => {
  // Get the score from the navigation parameters
  const { score } = route.params;
  const navigation5 = useNavigation();  // Get the navigation prop using the hook


  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Your Score: {score}</Text>
      <TouchableOpacity
                style={styles.button}
                onPress={() => navigation5.navigate('Home')}
              >
                <Text style={styles.buttonText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 24,
    margin: 20,
  },
  button: {
    backgroundColor: '#4CAF50', // Green background as used in other buttons
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: 200, // Adjust width as needed
    alignItems: 'center', // Center text horizontally
  },
  buttonText: {
    color: 'white', // White text color
    fontSize: 18, // Adjust font size as needed
  },
});

export default ScorePage;
