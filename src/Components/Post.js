import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function Post({ post, likePost, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.post}>
        <Text>{post.content}</Text>
        <Text>{post.date.toDateString()}</Text>
        <View style={styles.actions}>
          <Button title={`Like (${post.likes})`} onPress={() => likePost(post.id)} />
          <Button title={`Comments (${post.comments})`} onPress={() => {}} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  post: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});
