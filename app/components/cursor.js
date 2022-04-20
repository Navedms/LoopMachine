import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import colors from '../config/colors';

function Cursor({ position, duration }) {
    const sec = position / 1000;
    const dur = duration / 1000;
    const windowWidth = Dimensions.get('window').width;
    const result = windowWidth * sec / dur;
    const left = result ? result : 0;
    return (
        <>
            <View style={[styles.container, { left: left }]}></View>
            <View style={[styles.start, { left: left - 5 }]}></View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 1,
        height: 500,
        backgroundColor: colors.black,
        position: 'absolute',
        top: 0,
        zIndex: 2,
    },
    start: {
        width: 10,
        height: 40,
        backgroundColor: colors.black,
        position: 'absolute',
        top: 0,
        zIndex: 2,
    }
});

export default Cursor;