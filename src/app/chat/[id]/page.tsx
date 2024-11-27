import HeaderLayout from "@/components/layout/HeaderLayout";
import MobileLayout from "@/components/layout/MobileLayout";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const id = (await params).id;
  return (
    <section>
      <HeaderLayout backButton={true}></HeaderLayout>
      <MobileLayout footer={false}>
        <div className="chatlist_title">채팅 목록</div>
        <div className="chatlist_list"></div>
      </MobileLayout>
    </section>
  );
}
