const rand = (min, max) => {
  return min + Math.random() * (max - min)
}

export const getRandomColor = () => {
  let h = rand(1, 360);
  let s = rand(0, 60);
  let l = rand(0, 60);
  return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

export const gameStatuses = {
  waiting: 'waiting',
  playing: 'playing',
  finished: 'finished'
}