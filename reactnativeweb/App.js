// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import LearningPage from './LearningPage';
import LearningPage2 from './LearningPage2';
import LearningPage3 from './LearningPage3';
import TestPage from './TestPage';
import AnswerPage from './Answer';
import ScorePage from './ScorePage';
import TestPage2 from './TestPage2';
import TestPage3 from './TestPage3';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LearningPage" component={LearningPage} options={{ title: 'Sfumato' }} />
        <Stack.Screen name="LearningPage2" component={LearningPage2} options={{ title: 'Chiaroscuro' }} />
        <Stack.Screen name="LearningPage3" component={LearningPage3} options={{ title: 'Perspective' }} />
        <Stack.Screen name="Test" component={TestPage} options={{ title: 'Test' }} />
        <Stack.Screen name="TestPage2" component={TestPage2} options={{ title: 'Test' }} />
        <Stack.Screen name="TestPage3" component={TestPage3} options={{ title: 'Test' }} />
        <Stack.Screen name="Answer" component={AnswerPage} options={{ title: 'Answer' }} />
        <Stack.Screen name="Score" component={ScorePage} options={{ title: 'Score' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
