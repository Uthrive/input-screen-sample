import {useFormik} from 'formik';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as yup from 'yup';

const signInFormSchema = yup.object().shape({
  username: yup.string().min(4).required().label('Username'),
  password: yup.string().min(6).required().label('Passsword'),
});

function Home() {
  const {values, errors, handleChange, handleBlur, isValid, handleSubmit} =
    useFormik({
      validationSchema: signInFormSchema,
      initialValues: {
        username: '',
        password: '',
      },
      onSubmit: e => handleSubmitData(e),
    });

  const handleSubmitData = value => {
    alert(`username: ${values.username}\npassword: ${values.password}`);
    console.log(value);
  };

  return (
    <View style={styles.contain}>
      <Text style={styles.title}>Basic Theory-RN</Text>
      <TextInput
        onChangeText={handleChange('username')}
        onBlur={handleBlur('username')}
        placeholder={'Username'}
        value={values.username}
        style={styles.textInput}
      />
      {errors.username && <Text style={styles.error}>{errors.username}</Text>}
      <TextInput
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        placeholder={'Password'}
        value={values.password}
        style={styles.textInput}
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}
      <TouchableOpacity
        disabled={!isValid}
        style={[styles.btn, !isValid && styles.btnDisable]}
        onPress={handleSubmit}>
        <Text style={styles.txtSubmit}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#3F52C7',
  },
  textInput: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 40,
    fontSize: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  error: {
    color: 'red',
    fontSize: 12,
    textAlign: 'right',
  },
  btn: {
    backgroundColor: '#3F52C7',
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 8,
  },
  txtSubmit: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 40,
    paddingVertical: 10,
    color: 'white',
  },
  btnDisable: {
    opacity: 0.4,
  },
  label: {
    fontSize: 12,
  },
});
