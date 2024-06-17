import React from 'react';

const InfoBar = () => {
  return (
    <div className="bg-gray-100 border-t border-b py-2 flex justify-center space-x-12 text-gray-600 text-sm">
      <div className="flex items-center space-x-1">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m3 5H6m6 0a3 3 0 11-6 0m6 0a3 3 0 01-6 0"></path>
        </svg>
        <span>Embalagem <span className="font-bold">ZERO PLÁSTICO</span></span>
      </div>
      <div className="flex items-center space-x-1">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V4h-2v5h-3l4 4 4-4h-3zM6 20h12"></path>
        </svg>
        <span>3% de desconto <span className="font-bold">no PIX</span></span>
      </div>
      <div className="flex items-center space-x-1">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17l4-4 4 4m0 0V10a6 6 0 00-12 0v7z"></path>
        </svg>
        <span>6x sem juros <span className="font-bold">no cartão de crédito</span></span>
      </div>
      <div className="flex items-center space-x-1">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v6h-18V3zM3 13h18v8h-18v-8z"></path>
        </svg>
        <span>Frete Grátis - <span className="font-bold">Ver Regulamento</span></span>
      </div>
    </div>
  );
};

export default InfoBar;
