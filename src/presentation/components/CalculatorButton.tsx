import {Text, Pressable} from 'react-native';
import React from 'react';
import {colors, styles} from '@app/config/app-theme';

interface Props {
  btnBackgroundColor?: string;
  label: string;
  labelBlack?: boolean;
  grown?: boolean;
  onPressFunct: () => void;
}

export function CalculatorButton({
  label,
  labelBlack = false,
  btnBackgroundColor = colors.darkGray,
  grown = false,
  onPressFunct,
}: Props) {
  return (
    <Pressable
      style={({pressed}) => ({
        ...styles.button,
        backgroundColor: btnBackgroundColor,
        opacity: pressed ? 0.8 : 1,
        flexGrow: grown ? 1 : 0,
      })}
      onPress={() => onPressFunct()}>
      <Text
        style={{
          ...styles.buttonText,
          color: labelBlack ? 'black' : 'white',
        }}>
        {label}
      </Text>
    </Pressable>
  );
}
