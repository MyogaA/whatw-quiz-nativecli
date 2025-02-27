/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {View, Image, Text, Button, ButtonText} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import logo from '../assets/logo.png';
import googleIcon from '../assets/google.png';
import {ImageBackground} from 'react-native';
import {useAuth} from '../hooks/useAuth';
import ReversedWaterWave from '../feature/background/ReversedWaterWave';
import WaterWave from '../feature/background/WaterWave';

export default function Login({navigation}: any) {
  const {onGoogleButtonPress} = useAuth({navigation});
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={{flex: 1}}>
      <View style={{flex: 1, position: 'relative'}}>
        <ReversedWaterWave />
        <WaterWave />
        <View
          width={'100%'}
          height={'100%'}
          backgroundColor="transparent"
          justifyContent="space-between"
          alignItems="center"
          paddingVertical={60}
          paddingHorizontal={30}>
          <View>
            <Image source={logo} alt="logo" width={400} height={400} />
          </View>
          <View>
            <View>
              <Button
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={() => {
                  onGoogleButtonPress();
                }}>
                <View display="flex" flexDirection="row" gap={4}>
                  <Image
                    source={googleIcon}
                    alt="Google Icon"
                    width={20}
                    height={20}
                  />
                  <ButtonText>
                    <Text color="white" fontSize={16} fontWeight="bold">
                      Continue with Google
                    </Text>
                  </ButtonText>
                </View>
              </Button>
            </View>
            <Text color="white" fontSize={10}>
              By continuing, you agree to the terms and privacy
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
