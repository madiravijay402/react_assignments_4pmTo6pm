import { useState } from "react";

function ProfileCard() {

  const [profile, setProfile] = useState({
    name: "Priya",
    role: "Developer",
    experience: 2
  });

  const promote = () => {
    setProfile({
      ...profile,
      role: "Senior Developer",
      experience: profile.experience + 1
    });
  };

  return (
    <div>
      <h2>Name: {profile.name}</h2>
      <h3>Role: {profile.role}</h3>
      <h3>Experience: {profile.experience}</h3>

      <button onClick={promote}>Promote</button>
    </div>
  );
}

export default ProfileCard;