type ProfileHeaderProps = {
  isVerified?: boolean;
};

export default function ProfileHeader({
  isVerified = false,
}: ProfileHeaderProps) {
  return (
    <div>
      <h2 className="text-xl font-bold">
        Profile Header
      </h2>

      {isVerified && (
        <p className="text-green-500">
          ✅ Verified Account
        </p>
      )}
    </div>
  );
}