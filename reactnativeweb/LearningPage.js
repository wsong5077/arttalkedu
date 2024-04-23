import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LearningPage = () => {
  const navigation = useNavigation();  // Get the navigation prop using the hook
  const [modalVisible, setModalVisible] = useState(false);
  const [imageUri, setImageUri] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg');
  const [content, setContent] = useState({
    title: "Sfumato: The Art of Smoke and Mystery",
    details: [
      "Origin of the Term: \"Sfumato\" comes from the Italian \"sfumare,\" meaning \"to tone down\" or \"to evaporate like smoke.\"",
      "Developer: This technique was developed by Leonardo da Vinci, one of the Renaissance's most revered artists."
    ]
  });
  const [detail, setDetail] = useState({
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/WSJS6BLFwHqFFoLDB4DJij.jpg', 
    description: 'Detail of the face of Mona Lisa showing the use of sfumato, particularly in the shading around the eyes.'
  });
  
  const handleContinuePress = () => {
    setContent({
      title: "Characteristics of Sfumato",
      details: [
        "Subtle Blending: Colors and tones gradually merge without harsh outlines or borders.",
        "Atmospheric Depth: Achieves a smoky effect, adding a sense of volume and depth to paintings."
      ]
    });
  };
  const handleNextPress = () => {
    navigation.navigate('LearningPage2');
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
            style={[styles.hotspot, { right: '60%', top: '20%' }]}
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

export default LearningPage;