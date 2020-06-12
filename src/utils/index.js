export const isSSR = () => {
  const res = typeof window === "undefined";
  console.log("isSSR: " + res);
  return res;
};

export function preloadImage(url) {
  var img = new Image();
  img.src = url;
}
