export function getHerosResults(heros) {
  return {
    type: "@hero/search",
    payload: heros,
  };
}

export function addHeroToMyTeam(hero, alignment) {
  return {
    type: "@hero/add",
    payload: hero,
    alignment: alignment,
  };
}

export function removeHeroFromTeam(hero, alignment) {
  return {
    type: "@hero/remove",
    payload: hero,
    alignment: alignment,
    idHeroToRemove: hero.id,
  };
}

export function setTop(value) {
  return {
    type: "@ui/top",
    payload: value,
  };
}

export function setSpinner(value) {
  return {
    type: "@ui/spinner",
    payload: value,
  };
}
