import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);

  const handleButtonClick = () => {
    setShowWelcome(true);
  };

  return (
    <View style={styles.container}>
      {!showWelcome ? (
        <View style={styles.formContainer}>
          <Text style={styles.headline}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Login" onPress={handleButtonClick} color="#2196f3" />
        </View>
      ) : (
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.userInfo}>
            Username: {username}
            {'\n'}
            Password: {password}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  formContainer: {
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  welcomeContainer: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  userInfo: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;
