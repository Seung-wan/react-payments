import { useState } from 'react';

export default function useCardSelectModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedCard, setSelectedCard] = useState({
    name: '',
    color: '',
  });

  const 카드사가선택된 = selectedCard.name !== '';

  const handleClickOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleClickCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClickCard = ({ name, color }: { name: string; color: string }) => {
    if (!name || !color) {
      return;
    }

    setSelectedCard({ name, color });
    setIsModalOpen(false);
  };

  return { isModalOpen, selectedCard, 카드사가선택된, handleClickOpenModal, handleClickCloseModal, handleClickCard };
}
