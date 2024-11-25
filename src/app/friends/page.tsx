import UserProfile from "@/components/card/UserProfile";
import { friendsDummy } from "./dummy";
import "./style.scss";
import FriendCard from "@/components/card/FriendCard";
const page = () => {
  return (
    <section className="friend_page_wrapper">
      <div className="friend_page_title">
        <button className="add_friend_button">친구 추가</button>
      </div>
      <div className="friend_list_wrapper">
        <div className="friend_list_title">
          친구 목록에서 친구를 추가하거나 삭제할 수 있습니다.
        </div>
        <div className="friend_list">
          {friendsDummy.map((friend) => {
            return <FriendCard key={friend.userId} friend={friend} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
