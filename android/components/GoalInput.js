import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';

function GoalInput({
  goalText,
  goalInputHandler,
  addGoalHandler,
  visible,
  cancelHandler,
}) {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Your course goal"
          placeholderTextColor={'#FFF'}
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={cancelHandler}>
            <Text style={styles.buttonText}> Cancel </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={addGoalHandler}>
            <Text style={styles.buttonText}> Add Goal </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    color: '#FFF',
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    padding: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#311b6b',
    flex: 1,
  },
});
