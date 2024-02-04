import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <ImageBackground
        style={styles.Image}
        source={require('./assets/images/sport.jpg')}>
        <Image
          source={require('./assets/images/Gearup.png')}
          style={styles.headText}
        />
        <TouchableOpacity style={styles.letsgo_btn} onPress={() => {}}>
          <Text style={styles.letsgo_text}>Let's Go</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  headText: {
    marginTop: 100,
    width: 400,
    height: 70,
  },
  container: {
    backgroundColor: '#171717',
    flex: 1,
  },
  Image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  letsgo_btn: {
    backgroundColor: '#1F8900',
    paddingVertical: 10, 
    paddingHorizontal: 100, 
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 50,
  },
  letsgo_text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AppPro;
