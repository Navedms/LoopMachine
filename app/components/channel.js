import React from 'react';
import { View, StyleSheet } from 'react-native';

import getDurationFormat from '../config/durationFormat';
import switchValues from '../config/switchValues';
import Text from './appText';
import Controller from './controller';
import colors from '../config/colors';

function Channel({
  onPress,
  title,
  duration = 0,
  position = 0,
  color,
  backgroundColor,
  style,
  mute,
  header
}) {


  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }, style]}>
      {header ?
        <View style={styles.header}>
          <View style={styles.lines}></View>
          <View style={styles.shortLines}></View>
          <View style={styles.lines}></View>
          <View style={styles.shortLines}></View>
          <View style={styles.lines}></View>
          <View style={styles.shortLines}></View>
          <View style={styles.lines}></View>
          <View style={styles.shortLines}></View>
          <View style={styles.lines}></View>
          <View style={styles.shortLines}></View>
          <View style={styles.lines}></View>
          <View style={styles.shortLines}></View>
          <View style={styles.lines}></View>
          <View style={styles.shortLines}></View>
          <View style={styles.lines}></View>
          <View style={styles.shortLines}></View>
          <View style={styles.lines}></View>
        </View>
        :
        <>
          <Controller
            onPress={onPress}
            size={30}
            name={switchValues('volume-mute', 'volume-high', mute)}
            backgroundColor={switchValues(colors.dark, colors.white, mute)}
            color={colors.black}
            style={styles.mute}
          />
          <Text style={[styles.title, { color: color }]}>{title}</Text>
          <View style={styles.time}>
            <Text style={{ color: color }}>{getDurationFormat(position)} / </Text>
            <Text style={{ color: color }}>{getDurationFormat(duration)}</Text>
          </View>
        </>
      }
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  lines: {
    width: 1,
    height: 25,
    backgroundColor: colors.black,
  },
  shortLines: {
    width: 1,
    height: 10,
    backgroundColor: colors.black,
  },
  mute: {
    marginHorizontal: 15,
  },
  title: {
    marginHorizontal: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  time: {
    flexDirection: 'row',
    marginHorizontal: 15,
    right: 0,
    position: 'absolute',
  }
})

export default Channel;