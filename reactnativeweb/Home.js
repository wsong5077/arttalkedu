// Home.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('LearningPage')}>
          <Text style={styles.navItemText}>Sfumato</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('LearningPage2')}>
          <Text style={styles.navItemText}>Chiaroscuro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navItemText}>Perspective</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Test')}> {/* Add this block */}
          <Text style={styles.navItemText}>Test</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>Leonardo da Vinci's Techniques</Text>
      <Text style={styles.subheading}>Explore the genius of Renaissance art
      and <br></br> the innovative techniques of <br></br> Leonardo da Vinci.</Text>
      <Text style={styles.instruction}>Select a technique</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LearningPage')}><Text style={styles.buttonText}>Sfumato</Text></TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LearningPage2')}><Text style={styles.buttonText}>Chiaroscuro</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Perspective</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#FFF', 
    zIndex: 1,
  },
  navItem: {
    marginHorizontal: 10,
    padding: 10,
  },
  navItemText: { 
    fontSize: 30, 
    fontWeight: 'bold', 
  },
  heading: {
    fontSize: 60,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10,
  },
  instruction: {
    fontSize: 25,
    marginTop: 50,
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 20,
    right: 0,
    paddingBottom: 100,
  },
  button: {
    backgroundColor: '#E0E0E0',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: { 
    fontSize: 30, 
  },
});

export default Home;
