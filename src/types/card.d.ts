export type Card = {
  cardNumber: CardNumber;
  cardExpiration: CardExpiration;
  cardOwnerName: CardOwnerName;
  cardSecretCode: CardSecretCode;
  cardPassword: CardPassword;
  selectedCard: SelectedCard;
  cardAlias: CardAlias;
};

export type CardNumber = {
  num1: string;
  num2: string;
  num3: string;
  num4: string;
};

export type CardExpiration = {
  month: string;
  year: string;
};

export type CardOwnerName = string;

export type CardSecretCode = string;

export type CardPassword = {
  num1: string;
  num2: string;
};

export type SelectedCard = {
  name: string;
  color: string;
};

export type CardAlias = string;
