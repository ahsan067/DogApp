import { Dog_Breeds, List_All_Breeds, Theme } from "./ActionTypes";

export const dogBreeds = (dogBreeds) => ({
  type: Dog_Breeds,
  payload: dogBreeds,
});

export const allDogBreeds = (allBreeds) => ({
  type: List_All_Breeds,
  payload: allBreeds,
});

export const isTheme = (themee) => ({
  type: Theme,
  payload: themee,
});
