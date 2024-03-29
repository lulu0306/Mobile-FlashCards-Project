import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { blue } from '../utils/colors';



export default function Button ({ children, onPress, style = {} }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.textBtn, style]}>{children}</Text>
        </TouchableOpacity>
    )
}

 const styles = StyleSheet.create({
    textBtn: {
        textAlign: 'center',
        color: blue,
    }
})