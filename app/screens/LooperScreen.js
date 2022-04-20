import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Channel from '../components/channel';
import Controller from '../components/controller';
import Cursor from '../components/cursor';
import Screen from '../components/Screen';

import useLoad from '../hooks/useLoad';
import switchValues from '../config/switchValues';
import colors from '../config/colors';
import audioFiles from '../config/audioFiles';

function LooperScreen(props) {

    const {
        loading,
        uploadSounds,
        playSound,
        stopSound,
        isPlaying,
        loopSound,
        isLooping,
        status,
        muteSound,
        isMuted
    } = useLoad();

    useEffect(() => {
        uploadSounds();
    }, []);


    return (
        <Screen>
            <Cursor position={status.position} duration={status.duration} />
            <Channel
                color={colors.black}
                backgroundColor={colors.medium}
                header
            />
            <View style={styles.channelContainer}>
                <FlatList
                    data={audioFiles}
                    keyExtractor={(item) => item.name.toString()}
                    renderItem={({ item }) => (
                        <Channel
                            title={item.title}
                            color={colors.white}
                            backgroundColor={item.color}
                            position={status.position}
                            duration={status.duration}
                            onPress={() => muteSound(item.name)}
                            mute={isMuted[item.name]}
                        />
                    )}
                />
            </View>
            <View style={styles.bottomButtons}>
                <Controller
                    name={'stop'}
                    backgroundColor={colors.dark}
                    onPress={stopSound}
                    style={styles.controller}
                />
                <Controller
                    name={switchValues('reload', switchValues('pause', 'play', isPlaying), loading)}
                    backgroundColor={switchValues(colors.secondary, colors.primary, isPlaying)}
                    onPress={loading ? uploadSounds : playSound}
                    style={styles.controller}
                />
                <Controller
                    name={'loop'}
                    backgroundColor={switchValues(colors.secondary, colors.dark, isLooping)}
                    onPress={loopSound}
                    simpleLineIcons
                    style={styles.controller}
                />
            </View>
        </Screen>
    );
}


const styles = StyleSheet.create({
    container: {},
    channelContainer: {
        flex: 1,
    },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    controller: {
        marginHorizontal: 5,
    }
});

export default LooperScreen;