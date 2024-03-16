const transformPhoneNumber = (phoneNumber: string) => {
  phoneNumber = phoneNumber.replace('+7', '').replace(/[^\d]/g, '');
  const areaCode = phoneNumber.slice(0, 3);
  const firstPart = phoneNumber.slice(3, 6);
  const secondPart = phoneNumber.slice(6, 8);
  const thirdPart = phoneNumber.slice(8, 10);
  return `+7 ${areaCode} ${firstPart} ${secondPart} ${thirdPart}`.trim();
};

export default transformPhoneNumber;
