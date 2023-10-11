import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AppModal from '../theme/AppModal'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import { Colors } from '../theme';

LocaleConfig.locales['custom'] = {
    monthNames: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};
LocaleConfig.defaultLocale = 'custom';

const Calender = ({ isCalendar, setIsCalendar }) => {

    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);

    const onDayPress = (day) => {
        if (!selectedStartDate) {
            setSelectedStartDate(day.dateString);
        } else if (!selectedEndDate) {
            setSelectedEndDate(day.dateString);
        } else {
            // Clear selections if both start and end dates are already selected
            setSelectedStartDate(null);
            setSelectedEndDate(null);
        }
    };

    const isDateSelected = (date) => {
        if (selectedStartDate && selectedEndDate) {
            // Check if the date is within the selected range
            return date >= selectedStartDate && date <= selectedEndDate;
        }
        return false;
    };

    const handleCancel = () => {
        // Reset selections
        setSelectedStartDate(null);
        setSelectedEndDate(null);
    };

    const handleChooseDate = () => {
        // Handle the selected dates as needed
        if (selectedStartDate && selectedEndDate) {
            console.log('Selected Start Date:', selectedStartDate);
            console.log('Selected End Date:', selectedEndDate);
        }
    };

    // Customize the calendar theme
    const calendarTheme = {
        dayTextColor: 'white',
        calendarBackground: '#121318', // Set the calendar background to black
        textSectionTitleColor: 'white', // Set text color for month and year
        selectedDayBackgroundColor: 'blue', // Set background color for selected dates
        selectedDayTextColor: 'white', // Set text color for selected dates
        arrowColor: 'white', // Set color for arrows (month navigation)
        textInactiveColor: 'gray',
        textDisabledColor: 'gray',
    };

    // Define the style for selected dates (with box background)
    const selectedDateStyle = {
        selected: true,
        color: '#d60354',
        textColor: 'white',
        dotColor: 'white',
        backgroundStyle: {
            backgroundColor: '#d60354',
            borderRadius: 30,
            overflow: 'hidden', // Add this line
        },
    };

    const markedDates = {};

    // Check if a date is selected, and mark it with the selected style
    if (selectedStartDate) {
        markedDates[selectedStartDate] = selectedDateStyle;
    }

    if (selectedEndDate) {
        markedDates[selectedEndDate] = selectedDateStyle;
    }


    return (


        <AppModal visible={isCalendar} onClose={() => setIsCalendar(false)}>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Calendar
                        onDayPress={onDayPress}
                        markedDates={markedDates}
                        markingType={'period'}
                        theme={calendarTheme} // Apply the custom theme
                        // Customize the day component to set text color based on the month
                        renderDay={(day, _, __) => {
                            const currentDate = new Date();
                            const isCurrentMonth = day.month - 1 === currentDate.getMonth(); // Month is 0-based
                            return (
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text>{day.day}</Text>
                                </View>
                            );
                        }}
                        // Customize the header to set month text color to white
                        renderHeader={(date) => (
                            <View style={styles.header}>
                                <Text style={{ color: 'white', fontSize: 18 }}>{date.toString('MMMM yyyy')}</Text>
                            </View>
                        )}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.cancelButton]}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleChooseDate} style={[styles.button, styles.chooseDateButton]}>
                            <Text style={styles.buttonText}>Choose Date</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </AppModal>

    );
};

export default Calender


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        padding: 20,
        borderRadius: 10,
        width: '108%'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    cancelButton: {
        backgroundColor: Colors.MediumDark,
    },
    chooseDateButton: {
        backgroundColor: Colors.ButtonColor
    },
    header: {
        padding: 10,
        backgroundColor: '#121318',
        alignItems: 'center',
        justifyContent: 'center',
    },
});