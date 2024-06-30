import React from 'react';
import { View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
       <TextInput
            style={styles.input}
            placeholder="Search Twitter..."
            value={""}
            onChangeText={""}
            onSubmitEditing={""}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SEARCH</Text>
          </TouchableOpacity>
      {/* <Text>Search Screen</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
      
  },
});

export default SearchScreen;
