export const scrollToContactForm = () => {
  const el = document.getElementById("contact-form");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    return true;
  }
  return false;
};
