export const convertDur = (dur: number) => {
  const hours = Math.floor(dur / 3600);
  const minutes = Math.floor((dur - hours * 3600) / 60);

  return hours + "ч " + minutes + "м ";
};

export const wait = (delay: number) =>
  new Promise((res) => setTimeout(res, delay));
