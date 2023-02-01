export const randomChoose = (list) => {
  if (!list.length) return;
  const l = list.length;
  const random = Math.floor(Math.random() * l);
  return list[random];
};
