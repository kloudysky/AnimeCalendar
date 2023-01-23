import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {authentication} from './firebase/firebase-config';

function App(): JSX.Element {
  //TODO: Set up navigation pages and separate auth logic

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const RegisterUser = async () => {
    try {
      const {user} = await createUserWithEmailAndPassword(
        authentication,
        email,
        password,
      );
      setIsSignedIn(true);

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const SignInUser = async () => {
    try {
      const {user} = await signInWithEmailAndPassword(
        authentication,
        email,
        password,
      );
      setIsSignedIn(true);

      console.log(user.email);
    } catch (error) {
      console.log(error);
    }
  };

  const SignOutUser = async () => {
    try {
      const re = await signOut(authentication);
      setIsSignedIn(false);

      console.log(re);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={input => setEmail(input)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={input => setPassword(input)}
      />
      <Button title="Sign Up" onPress={RegisterUser} />
      {isSignedIn === true ? (
        <Button title="Sign Out" onPress={SignOutUser} />
      ) : (
        <Button title="Sign In" onPress={SignInUser} />
      )}
    </View>
  );
}

export default App;
