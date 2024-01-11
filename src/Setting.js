import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ImageCropPicker from 'react-native-image-crop-picker';


const Setting = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const handleImageUpload = response => {
    if (response && !response.didCancel) {
      const newImages = response.map(image => ({ uri: image.path }));
      setSelectedImages(prevImages => [...prevImages, ...newImages]);
      console.log('Selected images:', newImages);
    }
  };

  const openImagePicker = () => {
    ImageCropPicker.openPicker({
      multiple: true,
      mediaType: 'photo',
      cropping: true,
    })
      .then(response => {
        handleImageUpload(response);
      })
      .catch(error => {
        console.log('ImagePicker Error: ', error);
      });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.upbtn} onPress={() => openImagePicker()}>
            <View>
              <Text style={styles.uptxt}>Upload</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.imagesContainer}>
            {selectedImages.map((image, index) => (
              <Image key={index} source={image} style={styles.selectedImage}/>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upbtn: {
    backgroundColor: 'dodgerblue',
    paddingVertical: 5,
    marginVertical: 5,
    borderRadius: 5,
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uptxt: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  selectedImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    margin: 5,
  },
});

export default Setting;

