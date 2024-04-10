/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, Pressable} from 'react-native';
import GoalItem from './android/components/GoalItem';
import GoalInput from './android/components/GoalInput';

function App() {
  const [goalText, setGoalText] = useState('');
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setGoalText(enteredText);
  }

  function addGoalHandler() {
    if (!goalText) {
      return;
    }
    setGoals(currentGoals => [
      ...currentGoals,
      {text: goalText, id: Math.random().toString()},
    ]);
    setGoalText('');
    setIsModalVisible(false);
  }

  function deleteGoalHandler(itemId) {
    // console.log(itemId, 'dellll');
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== itemId);
    });
  }

  function addNewGoalHandler() {
    setIsModalVisible(true);
  }

  function cancelHandler() {
    console.log('close');
    setIsModalVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <View>
        <Text style={{textAlign: 'center', color: '#FFF'}}> GOALS </Text>
      </View>
      <Pressable>
        <Text
          style={{textAlign: 'center', marginTop: 20, color: '#FFF'}}
          onPress={addNewGoalHandler}>
          Add New Goal
        </Text>
      </Pressable>

      <View>
        <GoalInput
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          goalText={goalText}
          visible={isModalVisible}
          cancelHandler={cancelHandler}
        />
      </View>

      <FlatList
        data={goals}
        renderItem={itemData => {
          return (
            <GoalItem
              itemData={itemData.item.text}
              onDeleteItem={deleteGoalHandler}
              itemId={itemData.item.id}
            />
          );
        }}
        keyExtractor={item => {
          return item.id;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#301c5b',
    flex: 1,
  },
  list: {
    // textAlign: 'center',
    // marginLeft: 15,
    marginHorizontal: 7,
  },
});

export default App;
