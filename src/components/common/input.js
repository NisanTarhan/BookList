import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Input = ({ text, inputPlaceHolder, onChangeText, value, secureTextEntry }) => {
    const { inputWrapper, textStyle, inputStyle } = styles;
    return (
        <View style={inputWrapper}>
            <Text style={textStyle}>{text}</Text>
            <TextInput style={inputStyle} placeholder={inputPlaceHolder} value={value} onChangeText={onChangeText} 
            secureTextEntry={secureTextEntry}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
     flexDirection: 'row',
     height: 50,
     width: 'auto',
     borderColor: '#E5E5E8',
     borderBottomWidth: 1,
     alignItems: 'center',
    },
    textStyle: {
        paddingLeft: 20,
        fontSize: 17,
        flexGrow: 1
    },
    inputStyle: {
        fontSize: 17,
        flexGrow: 2
    }
});

export { Input };