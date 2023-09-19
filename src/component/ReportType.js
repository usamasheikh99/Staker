import React, { useState } from 'react';
import { Colors } from '../theme';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import AppModal from '../theme/AppModal';

function ReportType({ visible, onClose }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, label: 'Daily' },
    { id: 2, label: 'Weekly' },
    { id: 3, label: 'Monthly' },
    { id: 4, label: 'Quarterly' },

  ];

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  return (
    <AppModal visible={visible} onClose={onClose}>
      <View>
        <Text style={styles.logtext}>Report Type</Text>
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
    marginVertical: 6,
  },

  radioButtonCircle: {
    width: 20,
    height: 20,
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
    padding: 6
  },

  radioButtonText: {
    color: Colors.white,
    fontSize: 20,
    marginVertical: 2
  },

  logtext: {
    color: Colors.white,
    fontSize: 20,
    textAlign: 'center',
    bottom: 30
  }
});

export default ReportType;
