import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
       
      <Text>Notifications</Text>
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

export default NotificationScreen;
