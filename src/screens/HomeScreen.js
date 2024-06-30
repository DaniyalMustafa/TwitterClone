import React, { useState } from 'react';
import { View, FlatList, Text, Button, StyleSheet,TouchableOpacity } from 'react-native'; 
import Icon from 'react-native-vector-icons/Feather';
import Post from '../Components/Post';

const initialPosts = [
  { id: '1', content: 'First post!', likes: 0, comments: 0, date: new Date() },
  { id: '2', content: 'Hello Twitter!', likes: 0, comments: 0, date: new Date() },
  // Add more dummy posts here
];



export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState(initialPosts);
  const [activeIcon, setActiveIcon] = useState('home'); // Initial active icon

  const likePost = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const navigateToPostDetail = (post) => {
    navigation.navigate('PostDetailScreen', { post });
  };

  const navigateToScreen = (screenName) => {
    setActiveIcon(screenName); // Update active icon
    navigation.navigate(screenName); // Navigate to the selected screen
  };

 

  return (
  
    <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigateToScreen('Home')}>
        <Icon name="home" size={24} color={activeIcon === 'home' ? '#1DA1F2' : 'black'} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateToScreen('SearchScreen')}>
        <Icon name="search" size={24} color={activeIcon === 'search' ? '#1DA1F2' : 'black'} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateToScreen('NotificationScreen')}>
        <Icon name="bell" size={24} color={activeIcon === 'notifications' ? '#1DA1F2' : 'black'} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateToScreen('MessageScreen')}>
        <Icon name="mail" size={24} color={activeIcon === 'messages' ? '#1DA1F2' : 'black'} style={styles.icon} />
      </TouchableOpacity>
    </View>

    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Post post={item} likePost={likePost} onPress={() => navigateToPostDetail(item)} />
      )}
    />
  </View>
  );
}

//  const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
// });
 



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  icon: {
    marginHorizontal: 10,
  },
});
