const getUserData = () => {
  const userData = localStorage.getItem("userData");
  return userData ? JSON.parse(userData) : [];
};

const setUserData = (userData) => {
  localStorage.setItem("userData", JSON.stringify(userData));
};

export { getUserData, setUserData };
