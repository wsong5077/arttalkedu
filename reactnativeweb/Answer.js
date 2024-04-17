import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';

const AnswerPage = ({ navigation }) => {
  const [page, setPage] = useState(1);

  const handleContinue = () => {
    if (page < 3) {
      setPage(page + 1);
    } else {
      // If you're on the last page, navigate back to Home or to any other screen
      navigation.navigate('Home');
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

  const content = (
    <View style={styles.pageContent}>
      <Text style={styles.answerHeader}>Answer: Leonardo da Vinci, 'The Virgin of the Rocks'.</Text>
      <Image source={{ uri: pageContent[page - 1].imageUri }} style={styles.image} />
      <Text style={styles.text}>{pageContent[page - 1].text}</Text>
      <Button title="Continue" onPress={handleContinue} />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {content}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  pageContent: {
    alignItems: 'center',
    marginVertical: 20,
  },
  answerHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%', // You may need to adjust this
    height: 300, // Adjust the height as needed
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'justify',
    marginBottom: 20,
  },
  // ... your other styles
});

export default AnswerPage;

