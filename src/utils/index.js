export const isSSR = () => {
  const res = typeof window === "undefined";
  console.log("isSSR: " + res);
  return res;
};
