import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const TestPage = ({navigation}) => {
  const [selectedPainting, setSelectedPainting] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [hasChosen, setHasChosen] = useState(false);
  const [score, setScore] = useState(0);
  const [confirming, setConfirming] = useState(false); // State to manage the confirmation step


  const correctPainting = 'painting1'; // Identifier for the correct painting
  
  const handleSelectPainting = (painting) => {
    if (!hasChosen) {
      setSelectedPainting(painting);
      setConfirming(true); 
      //setHasChosen(true); // The user has now made their choice

      // If it's the correct painting, award points
      if (painting === correctPainting) {
        setScore(1); // Assuming each correct answer is worth 1 point
      }
    }
    else {
      setSelectedPainting(painting);
    }
  };

  const handleConfirmSelection = () => {
    setHasChosen(true); // The user has now made their choice and confirmed it
    setConfirming(false); // Hide confirmation box
    
    // If it's the correct painting, award points
    if (selectedPainting === correctPainting) {
      setScore(1); // Assuming each correct answer is worth 1 point
    }
  };

  const handleCancelSelection = () => {
    setSelectedPainting(null);
    setConfirming(false);
  };

  const handleShowHint = () => {
    if (showHint === true) {
        setShowHint(false);
    }
    else {
        setShowHint(true);
    }
  };

  const getBorderStyle = (painting) => {
    if (selectedPainting === painting) {
      if (hasChosen) {
        return selectedPainting === correctPainting ? styles.correct : styles.incorrect;
      }
      return styles.selected; // Before confirmation, show a grey box
    }
  };

  const isCorrectAnswerSelected = selectedPainting === correctPainting;

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        Which painting contains the technique of Sfumato? (Click on the painting to choose)
      </Text>

      <View style={styles.paintingsContainer}>
        {/* Replace with actual images and identifiers */}
        <TouchableOpacity onPress={() => handleSelectPainting('painting1')}>
          <Image source={{uri: 'https://uploads2.wikiart.org/00339/images/leonardo-da-vinci/virgin-of-the-rocks-between-1483-and-1486.jpg!Large.jpg'}} style={[styles.painting, getBorderStyle('painting1')]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelectPainting('painting2')}>
          <Image source={{uri: 'https://uploads1.wikiart.org/images/rembrandt.jpg!Portrait.jpg'}} style={[styles.painting, getBorderStyle('painting2')]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelectPainting('painting3')}>
          <Image source={{uri: 'https://uploads6.wikiart.org/00475/images/raphael/1-xvkpn0qm3eiqpzivkggfea.jpg!Large.jpg'}} style={[styles.painting, getBorderStyle('painting3')]} />
        </TouchableOpacity>
      </View>

      {
        <TouchableOpacity style={styles.answerButton} onPress={() => navigation.navigate('Answer', {score})}>
          <Text style={styles.answerButtonText}>Answer</Text>
        </TouchableOpacity>
      }

      <TouchableOpacity onPress={handleShowHint} style={styles.hintButton}>
        <Text>Hint</Text>
      </TouchableOpacity>

      {showHint && (
        <View style={styles.hintBox}>
          <Text style={styles.hintText}>
            Sfumato is characterized by soft, subtle transitions between colors, without harsh lines, giving a more realistic, three-dimensional appearance.
          </Text>
        </View>
      )}

{confirming && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={confirming}
          onRequestClose={() => setConfirming(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Confirm your selection</Text>
              <View style={styles.confirmationButtons}>
                <TouchableOpacity
                  style={styles.confirmButton}
                  onPress={handleConfirmSelection}
                >
                  <Text>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={handleCancelSelection}
                >
                  <Text>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // Add styles here according to your design requirements
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  paintingsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  painting: {
    width: 300,
    height: 450,
    margin: 10,
  },
  correct: {
    borderWidth: 5,
    borderColor: 'yellow',
  },
  incorrect: {
    borderWidth: 5,
    borderColor: 'red',
  },
  hintButton: {
    // Styling for the hint button
    backgroundColor: '#f0f0f0', // A neutral color for the button background
    padding: 10, // Add some padding for better touchability
    borderRadius: 5, // Round the corners slightly
    borderWidth: 1, // Add a border to define the button edges
    borderColor: '#dcdcdc', // A light grey color for the border
    marginTop: 20, // Add some space above the button
    alignSelf: 'stretch', // Stretch button to the container's width
    justifyContent: 'center', // Center the text horizontally
    alignItems: 'center', // Center the text vertically
  },
  hintBox: {
    // Styling for the hint text box
  },
  hintText: {
    fontSize: 20,
    color: 'grey',
  },
  answerButton: {
    backgroundColor: 'blue', // Change as per your color scheme
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  answerButtonText: {
    color: 'white', // Text color that contrasts with the button color
    fontSize: 18,
    textAlign: 'center',
  },
  selected: {
    borderWidth: 5,
    borderColor: 'grey',
  },
  correct: {
    borderWidth: 5,
    borderColor: 'green',
  },
  incorrect: {
    borderWidth: 5,
    borderColor: 'red',
  },
  // Styles for the confirmation modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  modalView: {
    margin: 20,
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
    fontSize: 18,
  },
  confirmationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  confirmButton: {
    backgroundColor: '#E8E8E8',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginHorizontal: 10,
  },
  cancelButton: {
    backgroundColor: '#ffcccb', // light red color for cancel button
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginHorizontal: 10,
  },
});

export default TestPage;

