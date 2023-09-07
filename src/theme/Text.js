import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

const Text = (props) => {
    const { style, fontWeight, ...restProps } = props;
    const fontFamily = getFontFamilyForWeight(fontWeight);

    return <RNText style={[styles.defaultText, { fontFamily, fontWeight }, style]} {...restProps} />;
};

Text.defaultProps = {
    fontWeight: 'normal', // Set your default font weight
};

const getFontFamilyForWeight = (fontWeight) => {
    switch (fontWeight) {
        case 'bold':
            return 'MyriadPro-Semibold';
        case 'light':
            return 'MyriadPro-Light';
        case 'normal':
        default:
            return 'MyriadPro-Regular'; // Set your default font family for normal weight
    }
};

const styles = StyleSheet.create({
    defaultText: {
        fontSize: 16, // Default font size
        // Add other default styles as needed
    },
});

export default Text;
