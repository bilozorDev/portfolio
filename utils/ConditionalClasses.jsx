const ConditionalClasses = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export default ConditionalClasses;
