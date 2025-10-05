import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

const posts = [
  {
    id: 1,
    username: '@jayverse',
    time: '2h',
    text: 'Designing my first mobile UI 😎📱',
  },
  {
    id: 2,
    username: '@spark_guru',
    time: '2h',
    text: 'Web3 meets social. 🔥',
  },
  {
    id: 3,
    username: '@lola.dev',
    time: '2h',
    text: 'Building cool things with Solana ✨ #cookedSpark',
  },
  {
    id: 4,
    username: '@etherealwave',
    time: '2h',
    text: 'This gradient tho 🌈',
  },
];

const FeedPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <View style={styles.avatarPlaceholder} />
        <Text style={styles.logoText}>
          cooked
          <Text style={{ color: '#00AEEF' }}>.spark</Text>
        </Text>
      </View>

      {/* Feed */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {posts.map((post) => (
          <View key={post.id} style={styles.postCard}>
            {/* Top Row */}
            <View style={styles.postHeader}>
              <View style={styles.avatarSmall} />
              <View style={styles.userInfo}>
                <Text style={styles.username}>{post.username}</Text>
                <Text style={styles.timestamp}>{post.time}</Text>
              </View>
            </View>

            {/* Post Text */}
            <Text style={styles.postText}>{post.text}</Text>

            {/* Image/Media Placeholder */}
            <View style={styles.mediaPlaceholder} />

            {/* Engagement Row */}
            <View style={styles.engagementRow}>
              <View style={styles.engagementItem}>
                <Feather name="heart" size={18} color="#fff" />
                <Text style={styles.engagementText}>1.2K</Text>
              </View>
              <View style={styles.engagementItem}>
                <Feather name="message-circle" size={18} color="#fff" />
                <Text style={styles.engagementText}>245</Text>
              </View>
              <View style={styles.engagementItem}>
                <Feather name="repeat" size={18} color="#fff" />
                <Text style={styles.engagementText}>72</Text>
              </View>
              <Feather name="bookmark" size={18} color="#fff" />
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Floating Button */}
      <TouchableOpacity
        style={styles.fabButton}
        onPress={() => navigation.navigate('Submit')}
      >
        <LinearGradient colors={['#00AEEF', '#00FF85']} style={styles.fabGradient}>
          <Feather name="plus" size={28} color="#fff" />
        </LinearGradient>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Feather name="home" size={24} color="#00FF85" />
        <Feather name="search" size={24} color="#A0A0A0" />
        <Feather name="plus-square" size={24} color="#A0A0A0" />
        <Feather name="bell" size={24} color="#A0A0A0" />
        <Feather name="user" size={24} color="#A0A0A0" />
      </View>
    </SafeAreaView>
  );
};

export default FeedPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#333',
  },
  avatarPlaceholder: {
    position: 'absolute',
    left: 15,
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#555',
  },
  logoText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  postCard: {
    backgroundColor: '#111',
    marginHorizontal: 10,
    marginTop: 15,
    borderRadius: 15,
    padding: 15,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarSmall: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#555',
  },
  userInfo: {
    marginLeft: 10,
  },
  username: {
    color: '#fff',
    fontWeight: '600',
  },
  timestamp: {
    color: '#999',
    fontSize: 12,
  },
  postText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 15,
    lineHeight: 20,
  },
  mediaPlaceholder: {
    backgroundColor: '#222',
    height: 180,
    borderRadius: 10,
    marginTop: 10,
  },
  engagementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  engagementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  engagementText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 13,
  },
  fabButton: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 5,
  },
  fabGradient: {
    padding: 15,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#111',
    borderTopWidth: 0.5,
    borderTopColor: '#333',
  },
});
