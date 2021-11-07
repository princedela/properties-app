import Navbar from "../Widgets/Navbar/Navbar";
import ProfileBanner from "../Widgets/Banner/ProfileBanner";
import "./profile.css";
export default function Profile() {
  return (
    <div className="profile">
      <Navbar />
      <ProfileBanner />
      <div className="profile-ministats uk-card uk-card-default">
        <p className="profile-name"></p>
      </div>
    </div>
  );
}
