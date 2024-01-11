import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, ScrollView, Modal } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'react-native-image-picker';


const profileData = [
  { label: 'Name: ', value: 'Shash Doe' },
  { label: 'Mobile: ', value: '+1 (123) 456-7890' },
  { label: 'Email: ', value: 'johndoe@example.com' },
  { label: 'Job Role: ', value: 'Frontend Developer' },
];

const Profile = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [profileImage, setProfileImage] = useState('');

  const renderItems = () => {
    return profileData.map((item, index) => (
      <View style={styles.card} key={index}>
        <Text style={styles.cardLabel}>{item.label}</Text>
        <Text style={styles.cardValue}>{item.value}</Text>
      </View>
    ));
  };

  // const openGallery = () => {
  //   ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
  //     console.log("img res",response)
  //     if (!response.didCancel && !response.error) {
  //       setProfileImage(response.assets[0]?.uri);
  //       setModalVisible(false);
  //     }
  //   });
  // };
  const openGallery = () => {
    const options = {
      mediaType: 'photo',
      multiple: true, // Enable multiple image selection
    };
  
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log("img res", response);
      if (!response.didCancel && !response.error) {
        const selectedImages = response.assets.map((asset) => asset.uri);
        // Handle the selected images here (e.g., set to state, display, etc.)
        console.log("Selected images:", selectedImages);
        // For simplicity, setting the first selected image as the profile image
        setProfileImage(selectedImages[0]);
        setModalVisible(false);
      }
    });
  };
  
  const openCamera = () => {
    ImagePicker.launchCamera(
      {mediaType: 'photo'}, (response) => {
        console.log("Camera",response)
        if(!response.didCancel && !response.error){
          setProfileImage(response.assets[0]?.uri);
          setModalVisible(false)
        }
      }
    )
  }


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileImageContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            source={profileImage ? { uri: profileImage } : require('./assets/prfl.jpeg')}
            style={styles.profileImage}
          />
          <Entypo name="camera" size={24} color="#fff" style={styles.cameraIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.username}>Shash Doe</Text>
      <Text style={styles.bio}>Frontend Developer</Text>
      {renderItems()}

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalButton} onPress={openCamera}>
              <Text style={styles.modalButtonText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={openGallery}>
              <Text style={styles.modalButtonText}>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 20,
    marginTop: 40,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 9,
    right: 0,
    backgroundColor: 'dodgerblue',
    padding: 8,
    borderRadius: 30,
  },
  username: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 18,
    color: '#666',
    marginBottom: 45,
  },
  card: {
    backgroundColor: 'lightpink',
    width: '76%',
    height: 70,
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardValue: {
    fontSize: 18,
    color: '#666',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    width: 250,
  },
  modalButton: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center'
  },
  modalButtonText: {
    fontSize: 18,
    color: 'dodgerblue',
  },
  upbtn: {
    backgroundColor: 'dodgerblue',
    paddingVertical: 5,
    marginVertical: 5,
    borderRadius: 5,
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  uptxt: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold'
  },
  upcontainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    marginRight: 10,
  }
});