import "../style.scss";
const UserProfile = ({
  name,
  size = "medium",
}: {
  name: string;

  size?: "small" | "medium";
}) => {
  return <div className={`user_profile_${size}`}>{name[0].toUpperCase()}</div>;
};

export default UserProfile;
