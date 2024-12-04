import HeaderLayout from "@/components/layout/HeaderLayout";

import { User } from "@/types/user";
import FriendAddButton from "./FriendAddButton";
import FriendlistComponent from "./Friendlist";

const FriendsPage = async () => {
  const { data: friends } = (await (
    await fetch("http://localhost:3000/api/friends", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json()) as { data: User[] };

  // console.log(data);

  return (
    <section className="friend_page_component">
      <HeaderLayout backButton={true}>
        <FriendAddButton />
      </HeaderLayout>

      {<FriendlistComponent friends={friends} />}
    </section>
  );
};

export default FriendsPage;
