import {useEffect, useRef, useState} from 'react';

enum Operator {
  sum = '+',
  subtract = '-',
  multiply = 'x',
  division = '/',
}

export function useCalculator() {
  const [number, setNumber] = useState('0');
  const [prevNumber, setprevNumber] = useState('0');
  const [formula, setFormula] = useState('');

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormula = formula.split(' ')[0];

      setFormula(`${firstFormula} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setprevNumber(`${subResult}`);
  }, [formula]);

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
    setFormula('');
    lastOperation.current = undefined;
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
    calculateResult();

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
    const result = calculateSubResult();
    setFormula(`${result}`);

    lastOperation.current = undefined;
    setprevNumber('0');
  };

  const calculateSubResult = (): number => {
    const [firstValue, _, secondValue] = formula.split(' ');
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (lastOperation.current) {
      case Operator.sum:
        return num1 + num2;

      case Operator.subtract:
        return num1 - num2;

      case Operator.multiply:
        return num1 * num2;

      case Operator.division:
        return num1 / num2;

      default:
        throw new Error('No valid operation');
    }
  };

  return {
    // Properties
    number,
    prevNumber,
    formula,

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
