import { useState, useRef } from 'react';
import { Audio } from 'expo-av';

import audioFiles from '../config/audioFiles';

export default useLoad = () => {

    const [sound, setSound] = useState({});
    const [loading, setLoading] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLooping, setIsLooping] = useState(false);

    const channelOne = useRef(new Audio.Sound());
    const channelTwo = useRef(new Audio.Sound());
    const channelThree = useRef(new Audio.Sound());
    const channelFour = useRef(new Audio.Sound());
    const channelFive = useRef(new Audio.Sound());
    const channelSix = useRef(new Audio.Sound());
    const channelSeven = useRef(new Audio.Sound());
    const channelEight = useRef(new Audio.Sound());
    const channelNine = useRef(new Audio.Sound());

    const [status, setStatus] = useState({});
    const [isMuted, setIsMuted] = useState({});

    const uploadSounds = async () => {
        setLoading(true);
        setIsPlaying(false);
        setStatus({
            position: 0,
            duration: 0
        });
        setIsMuted({});

        try {
            await channelOne.current.unloadAsync();
            await channelTwo.current.unloadAsync();
            await channelThree.current.unloadAsync();
            await channelFour.current.unloadAsync();
            await channelFive.current.unloadAsync();
            await channelSix.current.unloadAsync();
            await channelSeven.current.unloadAsync();
            await channelEight.current.unloadAsync();
            await channelNine.current.unloadAsync();

            await channelOne.current.loadAsync(audioFiles[0].uri);
            await channelTwo.current.loadAsync(audioFiles[1].uri);
            await channelThree.current.loadAsync(audioFiles[2].uri);
            await channelFour.current.loadAsync(audioFiles[3].uri);
            await channelFive.current.loadAsync(audioFiles[4].uri);
            await channelSix.current.loadAsync(audioFiles[5].uri);
            await channelSeven.current.loadAsync(audioFiles[6].uri);
            await channelEight.current.loadAsync(audioFiles[7].uri);
            const result = await channelNine.current.loadAsync(
                audioFiles[8].uri,
                {},
                true
            );
            setStatus({
                position: 0,
                duration: result.durationMillis
            });

            if (result.isLoaded === false) {
                setLoading(false);
                return console.log('Error in Loading Audio');
            } else {
                setSound({
                    channelOne: channelOne,
                    channelTwo: channelTwo,
                    channelThree: channelThree,
                    channelFour: channelFour,
                    channelFive: channelFive,
                    channelSix: channelSix,
                    channelSeven: channelSeven,
                    channelEight: channelEight,
                    channelNine: channelNine
                });
                if (Object.keys(sound).length > 0) {
                    await sound.channelOne.current.setStatusAsync({ shouldPlay: false });
                    await sound.channelTwo.current.setStatusAsync({ shouldPlay: false });
                    await sound.channelThree.current.setStatusAsync({ shouldPlay: false });
                    await sound.channelFour.current.setStatusAsync({ shouldPlay: false });
                    await sound.channelFive.current.setStatusAsync({ shouldPlay: false });
                    await sound.channelSix.current.setStatusAsync({ shouldPlay: false });
                    await sound.channelSeven.current.setStatusAsync({ shouldPlay: false });
                    await sound.channelEight.current.setStatusAsync({ shouldPlay: false });
                    await sound.channelNine.current.setStatusAsync({ shouldPlay: false });
                    sound.channelOne.current.setOnPlaybackStatusUpdate(UpdateStatus);
                    setLoading(false);
                }
                return true;
            }
        } catch (error) {
            console.log(error);
        }
    }

    const UpdateStatus = async (data) => {
        try {
            if (data.didJustFinish) {
                resetPlayer();
            } else if (data.positionMillis) {
                if (data.durationMillis) {
                    setStatus({
                        position: data.positionMillis,
                        duration: data.durationMillis
                    });
                }
            }
        } catch (error) {
            console.log('Error');
        }
    };

    const resetPlayer = async () => {
        try {
            const result = await sound.channelOne.current.getStatusAsync();
            if (!result.isLooping) {
                stopSound();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const playSound = async () => {
        if (isPlaying) return pauseSound();

        setIsPlaying(true);
        try {
            await sound.channelOne.current.playAsync();
            await sound.channelTwo.current.playAsync();
            await sound.channelThree.current.playAsync();
            await sound.channelFour.current.playAsync();
            await sound.channelFive.current.playAsync();
            await sound.channelSix.current.playAsync();
            await sound.channelSeven.current.playAsync();
            await sound.channelEight.current.playAsync();
            await sound.channelNine.current.playAsync();
        }
        catch (error) {
            console.log(error);
        }
    }

    const pauseSound = async () => {
        try {
            await sound.channelOne.current.setStatusAsync({ shouldPlay: false });
            await sound.channelTwo.current.setStatusAsync({ shouldPlay: false });
            await sound.channelThree.current.setStatusAsync({ shouldPlay: false });
            await sound.channelFour.current.setStatusAsync({ shouldPlay: false });
            await sound.channelFive.current.setStatusAsync({ shouldPlay: false });
            await sound.channelSix.current.setStatusAsync({ shouldPlay: false });
            await sound.channelSeven.current.setStatusAsync({ shouldPlay: false });
            await sound.channelEight.current.setStatusAsync({ shouldPlay: false });
            await sound.channelNine.current.setStatusAsync({ shouldPlay: false });
        }
        catch (error) {
            console.log(error);
        }
        setIsPlaying(false);
    }

    const stopSound = async () => {
        try {
            await sound.channelOne.current.stopAsync();
            await sound.channelTwo.current.stopAsync();
            await sound.channelThree.current.stopAsync();
            await sound.channelFour.current.stopAsync();
            await sound.channelFive.current.stopAsync();
            await sound.channelSix.current.stopAsync();
            await sound.channelSeven.current.stopAsync();
            await sound.channelEight.current.stopAsync();
            await sound.channelNine.current.stopAsync();
        }
        catch (error) {
            console.log(error);
        }
        setIsPlaying(false);
        setStatus({
            position: 0,
            duration: status.duration
        });
    }

    const loopSound = async () => {
        if (!isLooping) {
            try {
                await sound.channelOne.current.setIsLoopingAsync(true);
                await sound.channelTwo.current.setIsLoopingAsync(true);
                await sound.channelThree.current.setIsLoopingAsync(true);
                await sound.channelFour.current.setIsLoopingAsync(true);
                await sound.channelFive.current.setIsLoopingAsync(true);
                await sound.channelSix.current.setIsLoopingAsync(true);
                await sound.channelSeven.current.setIsLoopingAsync(true);
                await sound.channelEight.current.setIsLoopingAsync(true);
                await sound.channelNine.current.setIsLoopingAsync(true);
            }
            catch (error) {
                console.log(error);
            }
        } else {
            try {
                await sound.channelOne.current.setIsLoopingAsync(false);
                await sound.channelTwo.current.setIsLoopingAsync(false);
                await sound.channelThree.current.setIsLoopingAsync(false);
                await sound.channelFour.current.setIsLoopingAsync(false);
                await sound.channelFive.current.setIsLoopingAsync(false);
                await sound.channelSix.current.setIsLoopingAsync(false);
                await sound.channelSeven.current.setIsLoopingAsync(false);
                await sound.channelEight.current.setIsLoopingAsync(false);
                await sound.channelNine.current.setIsLoopingAsync(false);
            }
            catch (error) {
                console.log(error);
            }
        }
        setIsLooping(prevstate => (!prevstate))
    }

    const muteSound = async (channel) => {
        try {
            const result = await sound[channel].current.getStatusAsync();
            if (!result.isMuted) {
                try {
                    await sound[channel].current.setIsMutedAsync(true);
                    isMuted[channel] = true;
                }
                catch (error) {
                    console.log(error);
                }
            } else {
                try {
                    await sound[channel].current.setIsMutedAsync(false);
                    isMuted[channel] = false;
                }
                catch (error) {
                    console.log(error);
                }
            }
            setIsMuted(isMuted);
        }
        catch (error) {
            console.log(error);
        }
    }

    return { loading, uploadSounds, playSound, stopSound, isPlaying, loopSound, isLooping, status, muteSound, isMuted }
}