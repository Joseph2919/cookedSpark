import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  Platform,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SubmitScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // 🧠 Handle submit action
  const handleSubmit = async () => {
    if (!title.trim() || !description.trim()) {
      showToast('❌ Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('https://cookedspark.onrender.com/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: title,
          email: description,
        }),
      });

      const data = await response.json();

      if (data.success) {
        showToast('✅ Bravo! Submitted successfully.');
        setTitle('');
        setDescription('');
      } else {
        showToast('❌ ' + (data.message || 'Something went wrong.'));
      }
    } catch (error) {
      console.error('❌ API Error:', error);
      showToast('⚠️ Could not connect to backend.');
    }
  };

  // 🪄 Cross-platform toast/alert handler
  const showToast = (message) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert('Notification', message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Submit Content</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Title"
        placeholderTextColor="#999"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter Description"
        placeholderTextColor="#999"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity onPress={handleSubmit} activeOpacity={0.8}>
        <LinearGradient
          colors={['#FF6A88', '#8E54E9']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F9',
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
    color: '#2E2E2E',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default SubmitScreen;
