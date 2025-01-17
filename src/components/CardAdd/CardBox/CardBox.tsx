import { useMemo } from 'react';

import { CARD } from '@/constants/card';
import { useCardAddForm } from '@/context/CardAddForm';
import { isShowHyphen, maskingNumber } from '@/domain/card/card';

export default function CardBox() {
  const {
    cardForm: { cardNumber, cardExpiration, cardCompany, cardOwnerName },
  } = useCardAddForm();
  const { num1, num2, num3, num4 } = cardNumber;
  const { month, year } = cardExpiration;
  const { name, color } = cardCompany;

  const cardStyle = useMemo(() => {
    return { backgroundColor: color };
  }, [color]);

  return (
    <div className="card-box">
      <div className="empty-card" style={cardStyle}>
        <div className="card-top">{name} 카드</div>
        <div className="card-middle">
          <div className="small-card__chip" />
        </div>
        <div className="card-number">
          <span className="card-number">{num1}</span>
          {isShowHyphen(num1, num2) && <span>-</span>}

          <span className="card-number">{num2}</span>
          {isShowHyphen(num2, num3) && <span>-</span>}

          <span className="card-number">{maskingNumber(num3)}</span>
          {isShowHyphen(num3, num4) && <span>-</span>}

          <span className="card-number">{maskingNumber(num4)}</span>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__info">
            <span className="card-text card-text__ellipsis__small">{cardOwnerName || CARD.OWNER_NAME.PLACEHOLDER}</span>
            <span className="card-text">
              {month || CARD.EXPIRATION.PLACEHOLDER.MONTH} / {year || CARD.EXPIRATION.PLACEHOLDER.YEAR}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
