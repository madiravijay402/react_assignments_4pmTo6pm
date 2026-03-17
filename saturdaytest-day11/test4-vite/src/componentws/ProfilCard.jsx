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
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[220px]">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl font-bold">
          {profile.name.charAt(0)}
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-900">{profile.name}</h2>
          <p className="text-sm font-medium text-purple-600">{profile.role}</p>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-xl p-4 flex-1 flex flex-col justify-center border border-gray-100">
        <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Experience</span>
            <span className="text-gray-900 font-bold">{profile.experience} years</span>
        </div>
      </div>

      <button 
        onClick={promote}
        className="mt-4 w-full py-2.5 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors font-medium border border-purple-100"
      >
        Promote Employee
      </button>
    </div>
  );
}

export default ProfileCard;