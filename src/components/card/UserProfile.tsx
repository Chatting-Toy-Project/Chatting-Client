import "../style.scss";
import { randomColor } from "./randomColor";
const UserProfile = ({
  name,
  size = "medium",
}: {
  name: string;

  size?: "small" | "medium";
}) => {
  return (
    <div
      className={`user_profile_${size}`}
      style={{
        backgroundColor: randomColor().bgColor,
        color: randomColor().fontColor,
      }}
    >
      {name[0].toUpperCase()}
    </div>
  );
};

export default UserProfile;
