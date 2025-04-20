import ProfileInfo from "../../../components/ProfileInfo/ProfileInfo";
import AdListWidget from "../AdlistingWidget/AdListWidget";

const DashBoardHome = () => {
  return (
    <>
      <ProfileInfo />
      <div className="space-y-4">
        <AdListWidget />
      </div>
    </>
  );
};

export default DashBoardHome;
