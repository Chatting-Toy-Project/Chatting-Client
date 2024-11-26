import "../style.scss";
const UserProfile = ({
  name,
  color,
}: {
  name: string;
  color: {
    bgColor: string;
    fontColor: string;
  };
}) => {
  return (
    <div
      className="user_profile"
      style={{
        backgroundColor: color.bgColor,
        color: color.fontColor,
      }}
    >
      {name[0].toUpperCase()}
    </div>
  );
};

export default UserProfile;
