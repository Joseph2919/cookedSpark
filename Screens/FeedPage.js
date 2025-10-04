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

const FeedPage = () => {
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

      {/* FAB */}
      <TouchableOpacity style={styles.fabButton}>
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
    backgroundColor: '#0D0D0D',
  },
  topBar: {
    height: 80,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  postCard: {
    backgroundColor: '#1A1A1A',
    marginHorizontal: 16,
    marginBottom: 24,
    borderRadius: 16,
    padding: 16,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatarSmall: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333',
  },
  userInfo: {
    marginLeft: 10,
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
  },
  timestamp: {
    color: '#A0A0A0',
    fontSize: 12,
  },
  postText: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 8,
  },
  mediaPlaceholder: {
    width: '100%',
    height: 220,
    backgroundColor: '#333',
    borderRadius: 12,
    marginBottom: 12,
  },
  engagementRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  engagementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  engagementText: {
    color: '#fff',
    marginLeft: 4,
  },
  fabButton: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    elevation: