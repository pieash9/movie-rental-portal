const getImageUrl = (name) => {
  return null; // remove it
  return new URL(`../assets/movie-covers/${name}`, import.meta.url).href;
};

export { getImageUrl };
