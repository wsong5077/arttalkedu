import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TestPage = ({route, navigation3 }) => {
  const navigation = useNavigation();  // Get the navigation prop using the hook

  const [selectedPainting, setSelectedPainting] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [hasChosen, setHasChosen] = useState(false);
  const [score, setScore] = useState(0);
  const [confirming, setConfirming] = useState(false); // State to manage the confirmation step
  const [showAnswer, setShowAnswer] = useState(false);
  const [page, setPage] = useState(1);
  const [showAlert, setShowAlert] = useState(false); // State to show alert if no answer is selected


  const correctPainting = 'painting1'; // Identifier for the correct painting

  const handleNextPress = () => {
    navigation.navigate('TestPage2', {  score });
    };
  
  const handleSelectPainting = (painting) => {
    if (!hasChosen) {
      setSelectedPainting(painting);
      setConfirming(true); 
      //setHasChosen(true); // The user has now made their choice

      // If it's the correct painting, award points
      //if (painting === correctPainting) {
       // setScore(score + 1); // Assuming each correct answer is worth 1 point
      //}
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
      setScore(score + 1); // Assuming each correct answer is worth 1 point
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

  const handleShowAnswer = () => {
    if (!hasChosen) {
      setShowAlert(true); // Show alert if no selection has been confirmed
    } else {
      setShowAnswer(true);
    }
  };

  const handleContinue = () => {
    if (page < 3) {
      setPage(page + 1);
    } else {
      setShowAnswer(false);
    }
  };

  const pageContent = [
    {
      text: "By using this smoky, blurry effect around the edges of forms, such as around the Virgin’s temples and nose, rather than stark outline, the figures appear to emerge subtly from the darkness.",
      imageUri: 'https://uploads2.wikiart.org/00339/images/leonardo-da-vinci/virgin-of-the-rocks-between-1483-and-1486.jpg!Large.jpg', // replace with your actual image URL or require statement
    },
    {
      text: "The style of the portrait, with more direct and less softened lighting, suggests a different approach that could be attributed to a later period or a different artist who did not employ sfumato.",
      imageUri: 'https://uploads1.wikiart.org/images/rembrandt.jpg!Portrait.jpg', // replace with your actual image URL or require statement
    },
    {
      text: "It has a more direct and realistic approach to lighting, from the Dutch Baroque period, by Rembrandt.",
      imageUri: 'https://uploads6.wikiart.org/00475/images/raphael/1-xvkpn0qm3eiqpzivkggfea.jpg!Large.jpg', // replace with your actual image URL or require statement
    },
  ];

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
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Score: {score}</Text>
      </View>

      
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

      <View style={styles.actionContainer}>
       <TouchableOpacity onPress={handleShowHint} style={styles.hintButton}>
          <Text style={styles.answerButtonText}>Hint</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.answerButton} onPress={handleShowAnswer}>
        <Text style={styles.answerButtonText}>Show Answer</Text>
        </TouchableOpacity>
        {showAnswer && (
        <Modal
          animationType="slide"
          transparent={false}
          visible={showAnswer}
          onRequestClose={() => setShowAnswer(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.answerContainer}>
                <Image source={{ uri: pageContent[page - 1].imageUri }} style={styles.image} />
                <Text style={styles.answerHeader}>Answer: {pageContent[page - 1].text}</Text>
                {page < pageContent.length ? (
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleContinue}
                  >
                    <Text style={styles.buttonText}>Continue</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setShowAnswer(false)}
                  >
                    <Text style={styles.buttonText}>Close</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </Modal>
      )}

      

      {showHint && (
              <Modal
                animationType="slide"
                transparent={true}
                visible={showHint}
                onRequestClose={() => setShowHint(false)}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.hintText}>
                      Sfumato is characterized by soft, subtle transitions between colors, without harsh lines.
                    </Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => setShowHint(false)}
                    >
                      <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            )}




     
      </View>
      
      {showAlert && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showAlert}
          onRequestClose={() => setShowAlert(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Please confirm a selection first.</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setShowAlert(false)}
              >
                <Text style={styles.buttonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
           <TouchableOpacity style={styles.nextSectionButton} onPress={handleNextPress}>
              <Text>Next Question</Text>
            </TouchableOpacity>
          </View>
        );
      };

const styles = StyleSheet.create({
  // Add styles here according to your design requirements
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eef7ee', // Light grey

  },
  closeButton: {
    backgroundColor: '#E8E8E8',
    borderRadius: 20,
    padding: 10,
    marginTop:30,
    elevation: 2,
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#4CAF50', // Beautiful green as accent color
  },
  hintBox: {
    // Styling for the hint text box
  },
  hintText: {
    fontSize: 24,
    color: 'grey',
  },
  answerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#4CAF50', // Beautiful green as accent color
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '30%',
    padding: 10,
  },
  answerButtonText: {
    color: 'white', // Text color that contrasts with the button color
    fontSize: 24,
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
  scoreContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  answerContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center', // Center text horizontally

  },
  answerHeader: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'left',
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
  
  
  image: {
    width: '100%',
    height: 300, // Adjust the height as needed
    resizeMode: 'contain',
    marginBottom: 20,
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
});

export default TestPage;

