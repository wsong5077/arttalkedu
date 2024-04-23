import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LearningPage3 = ({ navigation2, route }) => {
  const navigation3 = useNavigation();  // Get the navigation prop using the hook
  console.log("LearningPage3 is now rendering");
  console.log("Params:", route.params);
  const [modalVisible, setModalVisible] = useState(false);
  const [imageUri, setImageUri] = useState('https://www.leonardodavinci.net/assets/img/works/last-supper.jpg');
  const [content, setContent] = useState({
    title: "Exploring Linear Perspective with Leonardo da Vinci",
    details: [
      "Technique Rediscovered: During the Renaissance, artists revived the use of linear perspective, a method where parallel lines converge at a single vanishing point. This creates an illusion of depth on a flat canvas.",
    ]
  });
  const [detail, setDetail] = useState({
    imageUrl: 'https://cenacolovinciano.org/wp-content/uploads/2019/06/Museo-Cenacolo-Vinciano-Una-perfetta-macchina-teatrale-1920x1080.jpg', 
    description: 'Leonardo placed the vanishing point at Jesus’s right temple, thus drawing the viewer’s attention toward the main subject. Although linear perspective seems like a systemized method of creating the illusion of space, it is complicated by its reliance on a single vantage point. Any viewing position other than the vantage point reveals a slightly distorted painted space. '
  });
  
  const handleContinuePress = () => {
    setContent({
      title: "Technique Highlight",
      details: [
        "Application in His Work: His paintings vividly showcase how he applied linear perspective to craft depth and space, bringing scenes and figures to life with remarkable realism.",
      ]
    });
  };
  const handleNextPress = () => {
    navigation3.navigate('Home');
  };
  
    

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: imageUri }}
            style={styles.image}
          />
          <TouchableOpacity
            style={[styles.hotspot, { right: '50%', top: '50%' }]}
            onPress={() => setModalVisible(true)}
          />
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.contentWrapper}>
          <Text style={styles.heading}>{content.title}</Text>
          {content.details.map((detail, index) => (
            <Text key={index} style={styles.infoText}>{detail}</Text>
          ))}
        </View>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinuePress}>
            <Text>Continue</Text>
        </TouchableOpacity>

      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Image
                source={{ uri: detail.imageUrl }}
                style={styles.detailImage}
            />
            <Text style={styles.detailDescription}>{detail.description}</Text>
            <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
            >
                <Text>Close</Text>
            </TouchableOpacity>
            </View>
        </View>
        </Modal>


        <TouchableOpacity style={styles.nextSectionButton} onPress={handleNextPress}>
        <Text>Next Section</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#4CAF50', // Beautiful green as accent color

  },
  imageWrapper: {
    width: '50%', // Takes up half the width of the container
    padding: 10, // Optional padding for the wrapper
    alignItems: 'center', // Centers the child image container
    justifyContent: 'center', // Centers the child image container vertically
  },
  imageContainer: {
    width: '100%', // The image container takes the full width of the wrapper
    maxWidth: 500, // Max width of the container, adjust as needed
    borderRadius: 20, // Optional, if you want rounded corners
    overflow: 'hidden', // Ensures the image does not bleed outside the border radius
    elevation: 5, // Optional, adds shadow for Android
    // For iOS shadow:
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  infoContainer: {
    width: '40%',
    maxWidth: 500,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    marginLeft: 20,
    marginBottom:20,
    marginTop:20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    flex: 1,  // Makes sure the container takes all available space
    flexDirection: 'column',  // Aligns children vertically
  },
  image: {
    width: '100%', // Full width of the image container
    height: undefined, // Height will be determined by aspect ratio
    aspectRatio: 0.75, // Aspect ratio of the image; adjust accordingly
  },
    infoBox: {
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        padding: 10,
        alignItems: 'flex-start', // Align text to the left
    },
    heading: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 10,
        padding:20,
    },
    infoText: {
        fontSize: 24,
        marginBottom: 5,
        padding:20,
        alignItems: 'center',
    },
    continueButton: {
        backgroundColor: '#E0E0E0',
        padding: 10,
        alignSelf: 'stretch',  // Stretches to the width of the container
        alignItems: 'center',
        marginBottom: 10,  // Adds some margin at the bottom if needed
      },
    contentWrapper: {
        flex: 1,  // Takes all space except for the space taken by the button
    },
     
    nextSectionButton: {
        padding: 10,
        backgroundColor: '#E0E0E0',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end', // Align button to the right
        position: 'absolute',
        right: 10,
        bottom: 10,
    },
    hotspot: {
        position: 'absolute',
        backgroundColor: 'rgba(255,255,0,0.5)', // Yellow color for demonstration
        width: 20, // Size of the clickable area
        height: 20, // Size of the clickable area
        borderRadius: 10, // Circular hotspots
        // Adjust the position of each hotspot relative to the imageContainer's dimensions
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        width: '30%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    closeButton: {
        backgroundColor: '#E8E8E8',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    detailImage: {
        width: '100%',
        height: 400, // Set the height as needed
        resizeMode: 'contain', // Adjust the resize mode as needed
        marginBottom: 0,
      },
      detailDescription: {
        textAlign: 'left',
        fontSize: 16,
        marginBottom: 20,
      },
});

export default LearningPage3;
