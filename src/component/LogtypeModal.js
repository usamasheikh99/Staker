import React, { useState } from 'react';
import { Colors } from '../theme';
import AppModal from '../theme/AppModal';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

function LogtypeModal({ visible, onClose }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, label: 'Information' },
    { id: 2, label: 'Error' },
    { id: 3, label: 'Warining' },
  ];

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  return (
    <AppModal visible={visible} onClose={onClose}>
      <View>
        <Text style={styles.logtext}>Log Type</Text>
      </View>
      <View style={{ marginHorizontal: 35 }}>
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
    width: 18,
    height: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    opacity: 0.7
  },
  radioButtonChecked: {
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: Colors.ButtonColor,
  },
  radioButtonText: {
    color: Colors.white,
    fontSize: 20
  },
  logtext: {
    color: Colors.white,
    fontSize: 20,
    textAlign: 'center',
    bottom: 30
  }
});

export default LogtypeModal;
