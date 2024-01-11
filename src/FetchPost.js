import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';

const FetchPost = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const itemsPerPage = 10;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${itemsPerPage}`)
      .then((response) => response.json())
      .then((data) => {
        if (currentPage === 1) {
          setPosts(data);
        } else {
          setPosts((prevPosts) => [...prevPosts, ...data]);
        }
      })
      .catch((error) => console.error('Error fetching data:', error))
      .finally(() => {
        setIsFetchingMore(false);
      });
  };

  const handleLoadMore = () => {
    if (!isFetchingMore) {
      setIsFetchingMore(true);
      setCurrentPage((prevPage) => prevPage + 1);
      fetchPosts();
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setCurrentPage(1); 
    fetchPosts();
    setTimeout(() => {
      setRefreshing(false);
    }, 500); 
  };

  const renderPostItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => setSelectedPost(item)}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleRefresh}>
        <Image style={{ height: 40, width: 40 }} source={require('./assets/2546705.png')} />
      </TouchableOpacity>
      {refreshing && <ActivityIndicator size="large" color="#0000ff" />}
      <FlatList
        data={posts}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isFetchingMore ? (
            <ActivityIndicator size="small" color="#0000ff" style={{ marginVertical: 10 }} />
          ) : null
        }
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={selectedPost !== false}
        onRequestClose={() => setSelectedPost(false)}
      >
        <View style={styles.centeredView}>
          {selectedPost !== false && (
            <View style={styles.modalView}>
              <Text style={styles.text}>User Id : {selectedPost.userId}</Text>
              <Text style={styles.text}>Title : {selectedPost.title}</Text>
              <Text style={styles.text}>Details : {selectedPost.body}</Text>
              <TouchableOpacity
                style={styles.modalCloseButton}
                onPress={() => setSelectedPost(false)}
              >
                <View style={styles.circleButton}>
                  <Text style={styles.roundedButton}>×</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#ffb6c1',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 13,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 10,
  },
  title: {
    fontSize: 21,
    color: 'black',
    fontWeight: '500',
    fontFamily: 'Poppins-Italic',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    shadowColor: 'black',
    width: 350,
    elevation: 15,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black',
  },
  roundedButton: {
    fontSize: 20,
    alignItems: 'center',
    paddingBottom: 8,
  },
  circleButton: {
    backgroundColor: 'lightgreen',
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default FetchPost;
