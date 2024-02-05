import { data } from '../../constants/data';

const padFunctions = (item, element, randoms, handleButtonClick, handleXButtonClick) => {
  if (item !== 'Del' && item !== 'Pay') {
    handleButtonClick(item);
  } else if (element.inputValue.length > 1 && item !== 'Pay') {
    handleXButtonClick();
  } else if (item === 'Pay' && element.inputValue.length === 9) {
		alert('True number is : 043996633')
    data.forEach((item, index) => {
      if (element.inputValue.includes(item.number)) {
        element.setPayPage(5);
        setTimeout(() => {
          element.setPayPage(3);
          element.setGetPayInfo(element.getpayinfo);
        }, randoms);
      } else {
        element.setPayPage(5);
        setTimeout(() => {
          element.setPayPage(4);
        }, randoms);
      }
    });
  }
};

export { padFunctions };
