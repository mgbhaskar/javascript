// movie.js
export const studio = "Marvel Studios";

export function playMovie(title) {
  return `Now play: "${title}" from ${studio}`;
}

export function getRating(title, rating) {
  return `The movie "${title}" has  rating of ${rating}/10`;
}
