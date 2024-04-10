/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';

function App() {
  const [goalText, setGoalText] = useState('');
  const [goals, setGoals] = useState([]);
  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setGoalText(enteredText);
  }

  function addGoalHandler() {
    setGoals(currentGoals => [...currentGoals, goalText]);
  }
  return (
    <View style={styles.appContainer}>
      <View>
        <Text style={{textAlign: 'center', color: '#000'}}> GOALS </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text> Cancel </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={addGoalHandler}>
          <Text> Add Goal </Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.list}>
          {goals.map(goal => (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    // backgroundColor: '#301c5b',
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    // alignItems: 'center',
    // backgroundColor: '#DDDDDD',
    padding: 10,
  },
  list: {
    // textAlign: 'center',
    // marginLeft: 15,
    marginHorizontal: 7,
  },
  goalItem: {
    margin: 8,
    padding: 12,
    borderRadius: 5,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: '#FFF',
    textTransform: 'uppercase',
  },
});

export default App;
