import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ScorePage = ({ route, navigation }) => {
  // Get the score from the navigation parameters
  const { score } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Your Score: {score}</Text>
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
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
  // ... additional styles you may want
});

export default ScorePage;
