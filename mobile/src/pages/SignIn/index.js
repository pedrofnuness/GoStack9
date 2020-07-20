import React, {useRef} from 'react';
import {Image} from 'react-native';
import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

const SignIn = ({navigation}) => {
  const passwordRef = useRef();

  const handleSubmit = () => {};

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            autoCorrect={false}
            icon="mail-outline"
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            secureTextEntry
            icon="lock-outline"
            placeholder="Sua Senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
};

export default SignIn;
