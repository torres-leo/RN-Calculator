import {View, Text} from 'react-native';
import React from 'react';
import {colors, styles} from '@app/config/app-theme';
import {CalculatorButton} from '@app/presentation/components/CalculatorButton';
import {useCalculator} from '@app/presentation/hooks/useCalculator';

export function Calculator() {
  const {
    buildNumber,
    clean,
    deleteLastOne,
    number,
    toggleSign,
    prevNumber,
    divisionOperation,
    multiplyOperation,
    subtractOperation,
    sumOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text style={styles.mainResult} adjustsFontSizeToFit numberOfLines={1}>
          {number}
        </Text>
        <Text style={styles.subResult} adjustsFontSizeToFit numberOfLines={1}>
          {prevNumber === '0' ? '' : prevNumber}
        </Text>
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPressFunct={clean}
          label="C"
          btnBackgroundColor={colors.lightGray}
          labelBlack
        />
        <CalculatorButton
          onPressFunct={toggleSign}
          label="+/-"
          btnBackgroundColor={colors.lightGray}
          labelBlack
        />
        <CalculatorButton
          onPressFunct={deleteLastOne}
          label="del"
          btnBackgroundColor={colors.lightGray}
          labelBlack
        />
        <CalculatorButton
          onPressFunct={divisionOperation}
          label="/"
          btnBackgroundColor={colors.orange}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton onPressFunct={() => buildNumber('7')} label="7" />
        <CalculatorButton onPressFunct={() => buildNumber('8')} label="8" />
        <CalculatorButton onPressFunct={() => buildNumber('9')} label="9" />
        <CalculatorButton
          onPressFunct={multiplyOperation}
          label="x"
          btnBackgroundColor={colors.orange}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton onPressFunct={() => buildNumber('4')} label="4" />
        <CalculatorButton onPressFunct={() => buildNumber('5')} label="5" />
        <CalculatorButton onPressFunct={() => buildNumber('6')} label="6" />
        <CalculatorButton
          onPressFunct={subtractOperation}
          label="-"
          btnBackgroundColor={colors.orange}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton onPressFunct={() => buildNumber('1')} label="1" />
        <CalculatorButton onPressFunct={() => buildNumber('2')} label="2" />
        <CalculatorButton onPressFunct={() => buildNumber('3')} label="3" />
        <CalculatorButton
          onPressFunct={sumOperation}
          label="+"
          btnBackgroundColor={colors.orange}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPressFunct={() => buildNumber('0')}
          label="0"
          grown
        />
        <CalculatorButton onPressFunct={() => buildNumber('.')} label="." />
        <CalculatorButton
          onPressFunct={calculateResult}
          label="="
          btnBackgroundColor={colors.orange}
        />
      </View>
    </View>
  );
}
