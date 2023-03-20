import React, { useEffect, useState } from 'react';
import Button from './Button';
interface ConpayPopupProps {
  productAddress: string;
  properties?: any;
}
const ConpayButton: React.FC<ConpayPopupProps> = ({productAddress:address,properties:_properties}) => {
  const [popupWindow, setPopupWindow] = useState<Window | null>(null);
  const [properties, setProperties] = useState<string>(JSON.stringify({createdWith: 'Conpay'}));
  useEffect(() => {
    console.log(address,_properties);
    if(_properties) {
      setProperties(JSON.stringify({..._properties, createdWith: 'Conpay'}));
    }
  }, []);
  const togglePopupVisibility = () => {
    if (popupWindow && !popupWindow.closed) {
      popupWindow.close();
      setPopupWindow(null);
    } else {
      const width = 450;
      const height = 680;
      const left = window.screen.width / 2 - width / 2;
      const top = window.screen.height / 2 - height / 2;
      const features = `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes,status=yes`;
      const newPopupWindow = window.open(`https://conpay-business.vercel.app/popup/${address}/${properties}/login`, 'ConpayPopup', features);
      setPopupWindow(newPopupWindow || null);
    }
  };

  return <Button title='Pay with Conpay' onClick={togglePopupVisibility} logo/>;
};

export default ConpayButton;
export { ConpayButton };