export const regions = ["us", "eu"] as const;
export type Region = (typeof regions)[number];
export const region: Region = import.meta.env.VITE_REGION;
