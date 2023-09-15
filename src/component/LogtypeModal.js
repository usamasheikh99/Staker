import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppModal from '../theme/Modal';

function LogtypeModal({ visible, onClose }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, label: 'Enformation' },
    { id: 2, label: 'Error' },
    { id: 3, label: 'Warining' },
  ];

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  return (
    <AppModal visible={visible} onClose={onClose}>
      <View>
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={styles.radioButton}
            onPress={() => handleOptionSelect(option.id)}
          >
            <View style={styles.radioButtonCircle}>
              {selectedOption === option.id && <View style={styles.radioButtonChecked} />}
            </View>
            <Text style={styles.radioButtonText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </AppModal>
  );
}  

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  radioButtonCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  radioButtonChecked: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#007AFF',
  },
  radioButtonText: {
    fontSize: 16,
    color: '#000',
  },
});

export default LogtypeModal;
