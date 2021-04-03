import { Platform } from "react-native";

const liveHost = "https://us-central1-mealstogo-a1c97.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogo-a1c97/us-central1";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";

// export const isMock = false;
export const isMock = true;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
