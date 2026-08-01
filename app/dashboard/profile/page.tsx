"use client";

import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    async function loadProfile() {
      try {
        const res = await fetch("/api/profile");
        const data = await res.json();

        console.log("PROFILE DATA:", data);

        if (data.success) {
          setProfile(data.profile);
        }
      } catch (error) {
        console.log("PROFILE LOAD ERROR:", error);
      }
    }

    loadProfile();
  }, []);

  if (!profile) {
    return (
      <div className="p-6 text-gray-500">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="p-6">

      <div className="max-w-xl bg-white rounded-3xl shadow-sm border p-6">

        {/* Profile Header */}
        <div className="flex items-center gap-4">

          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-3xl">
            👤
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-800">
              {profile.fullName}
            </h1>

            <div className="flex items-center gap-2 text-gray-600">
              <span>
                {profile.email}
              </span>

              {profile.emailVerified && (
                <span className="flex items-center gap-1 text-emerald-600 text-xs font-semibold">
                  <CheckCircle size={15}/>
                  Verified
                </span>
              )}

            </div>
          </div>

        </div>


        {/* Information */}

        <div className="mt-6 space-y-4">


          <div className="bg-emerald-50 rounded-xl p-3">
            <p className="text-xs text-gray-500">
              Full Name
            </p>

            <p className="font-semibold">
              {profile.fullName}
            </p>
          </div>


          <div className="bg-emerald-50 rounded-xl p-3">
            <p className="text-xs text-gray-500">
              Join Date
            </p>

            <p className="font-semibold">
              {new Date(profile.joinDate).toLocaleDateString()}
            </p>
          </div>


          <div className="bg-emerald-50 rounded-xl p-3">
            <p className="text-xs text-gray-500">
              Status
            </p>

            <p className="font-semibold text-emerald-600">
              Active
            </p>
          </div>


        </div>


      </div>

    </div>
  );
}