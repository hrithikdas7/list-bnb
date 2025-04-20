import AdListing from "../../../components/AdListing/AdListing";
import ProfileInfo from "../../../components/ProfileInfo/ProfileInfo";

const DashBoardHome = () => {
  return (
    <>
      <ProfileInfo
        name="Cameron Williamson"
        memberSince="2023"
        location="Apt D, San Jose, South Dakota"
        email="support@geekshubs.com"
        phone="(480) 555-0103"
        avatarUrl="/api/placeholder/150/150"
      />
      <div className="space-y-4">
        <AdListing
          title="Luxury couple apartment"
          location="Dallas, Texas"
          postedTime="23hrs ago"
          price="124.80"
          imageUrl="/api/placeholder/150/150"
        />
        <AdListing
          title="Beats Studio 3 Wireless Over Ear"
          location="Dallas, Texas"
          postedTime="23hrs ago"
          price="124.80"
          imageUrl="/api/placeholder/150/150"
        />
      </div>
    </>
  );
};

export default DashBoardHome;
