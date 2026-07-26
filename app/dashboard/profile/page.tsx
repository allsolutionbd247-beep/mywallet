"use client";

import ProfileHeader from "@/components/dashboard/ProfileHeader";
import KycSection from "@/components/dashboard/KycSection";
import ProfileSettings from "@/components/dashboard/ProfileSettings";

export default function ProfilePage() {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">My Profile</h1>
        <p className="text-xs text-slate-500 mt-1">
          Manage your personal information, KYC verification, and account security.
        </p>
      </div>

      {/* 1. Profile Header with Verified Badge */}
      <ProfileHeader isVerified={true} />

      {/* 2. KYC Verification Section */}
      <KycSection />

      {/* 3. Personal Settings */}
      <ProfileSettings />
    </div>
  );
}
