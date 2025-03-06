export const GET_ANIME_QUERY = `
query anime {
  anime(id: 48468) {
    id
    slug
    malUrl
    name
    synonyms
    images {
      jpg {
        imageUrl
      }
      webp {
        largeImageUrl
      }
    }
    genres
  }
}`;
