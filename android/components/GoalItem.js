import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

function GoalItem({itemData, onDeleteItem, itemId}) {
  console.log(itemId, 'Item Dataa');

  return (
    <View style={styles.list}>
      <View style={styles.goalItem}>
        <Pressable
          android_ripple={{color: '#dddddd'}}
          onPress={onDeleteItem.bind(this, itemId)}>
          <Text style={styles.goalText}>{itemData}</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
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
