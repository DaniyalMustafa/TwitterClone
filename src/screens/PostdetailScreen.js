import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PostDetailScreen({ route }) {
  const { post } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.content}>{post.content}</Text>
      <Text>{post.date.toDateString()}</Text>
      <Text>Likes: {post.likes}</Text>
      <Text>Comments: {post.comments}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    fontSize: 18,
    marginBottom: 12,
  },
});
