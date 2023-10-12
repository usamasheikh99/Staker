import { View, Text, Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState}from 'react'
import { Icons } from '../constants';
import { Colors } from '../theme';
import AppModal from '../theme/AppModal';

const { fontSize } = Metrics
const AssignPopup = ({ Assign, setIsAssign, }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { id: 1, label: 'Kashan' },
    { id: 2, label: 'Faizan' },
    { id: 3, label: 'Rehman' },
  ];

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };
  return (

    <AppModal visible={Assign} onClose={() => setIsAssign(false)}>
       <View>
        <Text style={styles.logtext}>Assign</Text>
        <Text style={styles.logtexts}></Text>
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
  )
}

export default AssignPopup


const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,

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
    opacity: 0.7,

  },

  radioButtonChecked: {
    backgroundColor: Colors.ButtonColor,
    width: 11,
    height: 11,
    borderRadius: 6,
    padding: 6

  },

  radioButtonText: {
    color: Colors.white,
    fontSize: fontSize(17),

  },

  logtext: {
    color: Colors.white,
    fontSize: fontSize(17),
    textAlign: 'center',
    bottom: 11,
  },

  logtexts: {
    bottom: 15,
    borderBottomWidth: 1,
    width: 310,
    borderColor: Colors.MediumDark,
    opacity: 0.4,
    marginLeft: 30,
  }
  
})




