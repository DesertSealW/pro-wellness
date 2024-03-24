const removeAlphaFromRgb = (color) => {
  const rgbaValues = color.match(/\d+/g); // Извлекаем числовые значения из строки цвета
  const rgbColor = `rgb(${rgbaValues[0]}, ${rgbaValues[1]}, ${rgbaValues[2]})`; // Формируем строку RGB без прозрачности
  return rgbColor;
};

export default removeAlphaFromRgb;
