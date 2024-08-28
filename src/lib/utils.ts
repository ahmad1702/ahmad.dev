export const scrollToID = (id: string) => {
  const techSectionEl = document.getElementById(id);
  const nav = document.getElementsByTagName("header")[0];
  if (techSectionEl) {
    // techSectionEl.scrollIntoView({
    //     behavior: 'smooth'
    // })
    const yOffset = nav ? -nav.clientHeight + -1 : -64;
    const y =
      techSectionEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

export const toTitleCase = (str: string) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(" ");
