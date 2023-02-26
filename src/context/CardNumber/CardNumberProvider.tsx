import { ChangeEvent, createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { CARD } from '@/constants/card';
import { validateCardNumber } from '@/domain/card/validation';
import { CardNumber } from '@/types/card';

type InitValue = {
  cardNumber: CardNumber;
  카드번호가모두입력된: boolean;
  handleChangeCardNumber: (e: ChangeEvent<HTMLInputElement>) => void;
};

const initValue: InitValue = {
  cardNumber: {
    num1: '',
    num2: '',
    num3: '',
    num4: '',
  },
  카드번호가모두입력된: false,
  handleChangeCardNumber: () => null,
};

export const CardNumberContext = createContext(initValue);

export default function CardNumberProvider({ children }: PropsWithChildren) {
  const [cardNumber, setCardNumber] = useState({
    num1: '',
    num2: '',
    num3: '',
    num4: '',
  });
  const cardNumbersLength = Object.values(cardNumber).map((num) => num.length);
  const 카드번호가모두입력된 = cardNumbersLength.every((length) => length === CARD.NUMBER.LENGTH);

  const handleChangeCardNumber = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      validateCardNumber({ name, value, cardNumber });

      setCardNumber((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [cardNumber],
  );

  const contextValue = useMemo(
    () => ({ cardNumber, 카드번호가모두입력된, handleChangeCardNumber }),
    [cardNumber, 카드번호가모두입력된, handleChangeCardNumber],
  );

  return <CardNumberContext.Provider value={contextValue}>{children}</CardNumberContext.Provider>;
}
