import { View, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Colors } from '../theme';

const Line = () => {
  const [progress, setProgress] = useState(0);

  // Simulate progress increase over time
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 85) {
        setProgress(progress + 6);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  progressBar: {
    height: 3,
    backgroundColor: Colors.Card, // Change the color as needed
    borderRadius: 15,
    bottom: 11,
    left:15
  },
});

export default Line;