const userservice = {
  userCache: {
    put: function(data) {
      localStorage.setItem("loginUser", JSON.stringify(data));
    }
  }
};

export default userservice;
