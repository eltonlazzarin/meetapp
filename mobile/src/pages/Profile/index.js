import React, {useRef, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Header from '~/components/Header';

import {updateProfileRequest} from '~/store/modules/user/actions';
import {signOut} from '~/store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  Separator,
  SubmitButton,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  const emailRef = useRef();
  const passwordRef = useRef();
  const oldPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      }),
    );
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Header />
      <Container>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Full name"
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Your email"
            ref={emailRef}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <Separator />

          <FormInput
            icon="lock"
            secureTextEntry
            placeholder="Your current password"
            ref={oldPasswordRef}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => passwordRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <FormInput
            icon="lock-open"
            secureTextEntry
            placeholder="Your new password"
            ref={passwordRef}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirm your new password"
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <SubmitButton onPress={handleSubmit}>Save profile</SubmitButton>
          <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
        </Form>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'My profile',
  tabBarIcon: ({tintColor}) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
