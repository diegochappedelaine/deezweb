import store from "store2";

const handleFavorites = (id: string): void => {
  // If user does'nt have "favorites" set OR if "favorites" is not an Array, I set a new Array with selected's ID
  if (!store.has("favoritesItems" || !Array.isArray(store("favoritesItems")))) {
    return store("favoritesItems", [id]);
  }

  const isAlreadyInFavorite = store("favoritesItems").indexOf(id) !== -1;

  if (isAlreadyInFavorite) {
    const favoritesWithRemovedId = store("favoritesItems").filter(
      (favorite: string) => favorite !== id
    );
    return store("favoritesItems", favoritesWithRemovedId);
  } else {
    return store.add("favoritesItems", id);
  }
};

const isFavorite = (id: string): boolean => {
  // If user does'nt have "favorites" set OR if "favorites" is not an Array, ID I'm checking cant be in favorite
  if (!store.has("favoritesItems" || !Array.isArray(store("favoritesItems")))) {
    return false;
  }
  const isAlreadyInFavorite = store("favoritesItems").indexOf(id) !== -1;

  return isAlreadyInFavorite;
};

export { handleFavorites, isFavorite };
