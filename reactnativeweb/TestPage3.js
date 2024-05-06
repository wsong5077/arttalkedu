import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TestPage3 = ({route, navigation2}) => {
  const [selectedPainting, setSelectedPainting] = useState(null);
  const navigation4 = useNavigation();  // Get the navigation prop using the hook
  const { score: initialScore } = route.params;
  const [score, setScore] = useState(initialScore);

  const [showHint, setShowHint] = useState(false);
  const [hasChosen, setHasChosen] = useState(false);
  const [confirming, setConfirming] = useState(false); // State to manage the confirmation step
  const [showAnswer, setShowAnswer] = useState(false);
  const [page, setPage] = useState(1);
  const [showAlert, setShowAlert] = useState(false); // State to show alert if no answer is selected


  const correctPainting = 'painting1'; // Identifier for the correct painting
  
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

  const handleNextPress = () => {
    navigation4.navigate('Score', { score });
  };

  const handleContinue = () => {
    if (page < 3) {
      setPage(page + 1);
    } else {
      setShowAnswer(false);
      navigation4.navigate('Score', { score });
    }
  };

  const pageContent = [
    {
      text: "Leonardo da Vinci demonstrates his mastery of linear perspective through the careful arrangement of architectural elements and the garden setting that leads the viewer's eye towards the central figures of the Virgin Mary and the Angel Gabriel. The use of a vanishing point creates a convincing three-dimensional space, with the lines of the building and the garden paths converging in the background, enhancing the depth and realism of the scene.",
      imageUri: 'https://www.antoniosiber.org/perspektiva_navjestenja/perspektiva_navjestenja_1.jpg', 
    },
    {
      text: "The Harvesters represents depth and space through size scaling and aerial perspective rather than the mathematical precision of linear perspective used in the left painting.",
      imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Pieter_Bruegel_the_Elder-_The_Harvesters_-_Google_Art_Project.jpg/1280px-Pieter_Bruegel_the_Elder-_The_Harvesters_-_Google_Art_Project.jpg', 
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


  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Score: {score}</Text>
      </View>

      
      <Text style={styles.question}>
      Which painting contains the technique of Perspective? (Click on the painting to choose)

      </Text>

      <View style={styles.paintingsContainer}>
        {/* Replace with actual images and identifiers */}
        <TouchableOpacity onPress={() => handleSelectPainting('painting1')}>
          <Image source={{uri: 'https://www.datocms-assets.com/103094/1688661773-1503990086334194-568324.jpg?auto=format%2Ccompress&max-w=800'}} style={[styles.painting, getBorderStyle('painting1')]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelectPainting('painting2')}>
          <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Pieter_Bruegel_the_Elder-_The_Harvesters_-_Google_Art_Project.jpg/1280px-Pieter_Bruegel_the_Elder-_The_Harvesters_-_Google_Art_Project.jpg'}} style={[styles.painting, getBorderStyle('painting2')]} />
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
                    When looking for linear perspective in a painting, search for a spot where all lines seem to meet. 

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
              <Text>View Your Result</Text>
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
    width: 600,
    height: 400,
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

export default TestPage3;

