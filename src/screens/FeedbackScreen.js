import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function FeedbackScreen() {
  const [improvement, setImprovement] = useState('');
  const [suggestions, setSuggestions] = useState('');

  const handleSubmit = () => {
    // Handle submit action
    console.log('Improvement:', improvement);
    console.log('Suggestions:', suggestions);
  };

  return (
    <View style={styles.container}>
      <Text>Feedback Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Improvement"
        value={improvement}
        onChangeText={setImprovement}
      />
      <TextInput
        style={styles.input}
        placeholder="Suggestions"
        value={suggestions}
        onChangeText={setSuggestions}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Button title="Cancel" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
