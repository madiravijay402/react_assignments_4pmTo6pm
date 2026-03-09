import React from "react";

const UserCity = () => {

  const user = {
    // address: {
    //   city: "Chennai"
    // }
  };

  return (
    <div>
      <h2>City: {user?.address?.city}</h2>
    </div>
  );
};

export default UserCity;