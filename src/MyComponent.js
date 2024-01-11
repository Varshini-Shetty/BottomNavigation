import React, { useState, useCallback } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // Define a callback function using useCallback
  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]); // The dependencies array ensures that the function is recreated only when 'count' changes

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>Count: {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default MyComponent;
