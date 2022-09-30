import { fetchUser } from "../utils/fetchLocalStorageData";

export const userInfo = fetchUser();

export const initialState = {
  user: userInfo,
};
