import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Animated } from 'react-native';

const Home = ({ navigation }) => {
  const scaleValue = new Animated.Value(1);
  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      friction: 4,
      useNativeDriver: true
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true
    }).start();
  };

  const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

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
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('LearningPage3')}>
          <Text style={styles.navItemText}>Perspective</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Test')}>
          <Text style={styles.navItemText}>Test</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>Leonardo da Vinci's Techniques</Text>
      <Text style={styles.subheading}>Explore the innovative techniques of Leonardo da Vinci</Text>
      <View style={styles.content}>
        <Image source={{uri: 'https://i.natgeofe.com/n/f4b296e6-89d5-4758-8223-5bd218089cf8/Leo9_3x2.jpg'}} style={styles.avatar} />
        <View style={styles.speechBubble}>
          <Text style={styles.speechText}>Select a technique to start learning!</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, { transform: [{ scale: scaleValue }] }]}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onPress={() => navigation.navigate('LearningPage')}
            >
              <Text style={styles.buttonText}>Sfumato</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { transform: [{ scale: scaleValue }] }]}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onPress={() => navigation.navigate('LearningPage2')}
            >
              <Text style={styles.buttonText}>Chiaroscuro</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { transform: [{ scale: scaleValue }] }]}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onPress={() => navigation.navigate('LearningPage3')}
            >
              <Text style={styles.buttonText}>Perspective</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eef7ee',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#80c883',
    zIndex: 1,
  },
  navItem: {
    marginHorizontal: 10,
    padding: 10,
  },
  navItemText: {
    fontSize: 30,
  },
  heading: {
    fontSize: 60,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: '#424242',
  },
  subheading: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10,
    color: '#424242',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 100,
    marginRight: 20,
  },
  speechBubble: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  speechText: {
    color: '#424242',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'flex-start',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#4CAF50', // Beautiful green as accent color
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});

export default Home;
