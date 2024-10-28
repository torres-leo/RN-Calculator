import {useRef, useState} from 'react';

enum Operator {
  sum,
  subtract,
  multiply,
  division,
}

export function useCalculator() {
  const [number, setNumber] = useState('0');
  const [prevNumber, setprevNumber] = useState('0');

  const lastOperation = useRef<Operator>();

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('-0')) {
      return setNumber(val => val.replace('0', numberString));
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') {
        return setNumber(val => val + numberString);
      }

      if (numberString === '0' && number.includes('.')) {
        return setNumber(val => val + numberString);
      }

      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      if (numberString === '0' && !number.includes('.')) return;

      return setNumber(val => val + numberString);
    }

    setNumber(val => val + numberString);
  };

  const clean = () => {
    setNumber('0');
    setprevNumber('0');
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }

    setNumber('-' + number);
  };

  const deleteLastOne = () => {
    setNumber(prev =>
      prev.length > 1
        ? prev.startsWith('-') && prev.length === 2
          ? '0'
          : prev.slice(0, -1)
        : '0',
    );
  };

  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setprevNumber(number.slice(0, -1));
    } else {
      setprevNumber(number);
    }

    setNumber('0');
  };

  const sumOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.sum;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const divisionOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.division;
  };

  const calculateResult = () => {
    const firstNumber = Number(prevNumber);
    const secondNumber = Number(number);

    switch (lastOperation.current) {
      case Operator.sum:
        setNumber(`${firstNumber + secondNumber}`);
        break;
      case Operator.subtract:
        setNumber(`${firstNumber - secondNumber}`);
        break;
      case Operator.multiply:
        setNumber(`${firstNumber * secondNumber}`);
        break;
      case Operator.division:
        setNumber(`${firstNumber / secondNumber}`);
        break;

      default:
        throw new Error('No valid operation');
    }

    setprevNumber('0');
  };

  return {
    // Properties
    number,
    prevNumber,

    // Methods
    buildNumber,
    clean,
    calculateResult,
    deleteLastOne,
    toggleSign,
    sumOperation,
    subtractOperation,
    multiplyOperation,
    divisionOperation,
  };
}
