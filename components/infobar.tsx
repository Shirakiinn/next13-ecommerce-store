import React from 'react';

const InfoBar = () => {
  return (
    <div className="bg-gray-100 border-t border-b py-2 flex justify-center space-x-12 text-gray-600 text-sm">
      <div className="flex items-center space-x-1">
      <img src="https://www.urbanflowers.com.br/wp-content/uploads/2019/10/package.png" alt="Imagem 1"/>
        <span>Embalagem <span className="font-bold">ZERO PLÁSTICO</span></span>
      </div>
      <div className="flex items-center space-x-1">
      <img src="https://www.urbanflowers.com.br/wp-content/uploads/2019/10/tag.png" alt="Imagem 1"/>
        <span>3% de desconto <span className="font-bold">no PIX</span></span>
      </div>
      <div className="flex items-center space-x-1">
      <img src="https://www.urbanflowers.com.br/wp-content/uploads/2019/10/credit-card.png" alt="Imagem 1"/>
        <span>6x sem juros <span className="font-bold">no cartão de crédito</span></span>
      </div>
      <div className="flex items-center space-x-1">
      <img src="https://www.urbanflowers.com.br/wp-content/uploads/2019/10/shipped.png" alt="Imagem 1" />
        <span>Frete Grátis - <span className="font-bold">Ver Regulamento</span></span>
      </div>
    </div>
  );
};

export default InfoBar;
