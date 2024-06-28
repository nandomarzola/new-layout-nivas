import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator: React.FC = () => {
  return  <QRCode value="https://barvitoriacardapio.com.br" size={350} />
};

export default QRCodeGenerator;
