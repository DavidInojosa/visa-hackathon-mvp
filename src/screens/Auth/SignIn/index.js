import React, { useCallback, useRef } from 'react';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { MaterialIcons } from '@expo/vector-icons';
import * as S from './styles';
import * as C from '../../../components';
import VISA from '../../../common/images/visa.png';

export default function Login() {
  const navigation = useNavigation();
  const passwordRef = useRef(null);

  const initialValuesForm = { email: '', password: '' };

  const formSchemaValidation = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('É obrigatório'),
    password: Yup.string()
      .min(3, 'Muito curto!')
      .max(50, 'Muito longo!')
      .required('É obrigatório'),
  });

  const onHandleLogin = useCallback(
    (user) => {
      navigation.navigate('CardRegister');
    },
    []
  );

  return (
    <C.Box>
      <S.ImageContainer source={VISA} />
      <Formik
        initialValues={initialValuesForm}
        onSubmit={(values) => onHandleLogin(values)}
        validationSchema={formSchemaValidation}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <S.InputArea>
              <S.CellInputArea>
                <MaterialIcons name="email" size={24} color="#FFF" />
                <S.CellInput
                  placeholder="Digite seu email*"
                  placeholderTextColor="#f4f4fa"
                  autoCorrect={false}
                  autoCapitalize="none"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  returnKeyType="next"
                  onSubmitEditing={() => passwordRef.current.focus()}
                />
              </S.CellInputArea>
              {errors.email && touched.email ? (
                <S.TextError>{errors.email}</S.TextError>
              ) : null}

              <S.CellInputArea>
                <MaterialIcons name="lock" size={24} color="#FFF" />
                <S.CellInput
                  placeholder="Digite sua senha*"
                  placeholderTextColor="#f4f4fa"
                  autoCorrect={false}
                  secureTextEntry
                  autoCapitalize="none"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  ref={passwordRef}
                  returnKeyType="next"
                  onSubmitEditing={handleSubmit}
                />
              </S.CellInputArea>
              {errors.password && touched.password ? (
                <S.TextError>{errors.password}</S.TextError>
              ) : null}
              <S.SignMessageButton
                onPress={null}
                style={{ marginBottom: 0, marginTop: 0, height: 20 }}
              >
                <S.SignMessageButtonText>
                  Esqueceu sua senha ?
                </S.SignMessageButtonText>
              </S.SignMessageButton>
            </S.InputArea>


            <C.Button onPress={handleSubmit}>
              <C.ButtonText>Entrar</C.ButtonText>
            </C.Button>

          </>
        )}
      </Formik>
      <S.SignMessageButton
        onPress={() => null}
      >
        <S.SignMessageButtonText>Não é cadastrado ?</S.SignMessageButtonText>
        <S.SignMessageButtonTextBold>Cadastre-se</S.SignMessageButtonTextBold>
      </S.SignMessageButton>
    </C.Box>
  );
}
