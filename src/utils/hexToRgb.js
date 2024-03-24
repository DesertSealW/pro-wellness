const hexToRgb = (hex) => {
  // Убираем # из переданного значения
  hex = hex.replace("#", "");

  // Разбиваем шестнадцатеричное значение на красный, зеленый и синий цвета
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Собираем значения в формат rgb(255, 255, 255)
  const rgb = `rgb(${r}, ${g}, ${b})`;

  return rgb;
};

export default hexToRgb;
