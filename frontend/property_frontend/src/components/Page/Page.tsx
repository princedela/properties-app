import ScrollToTop from "../Widgets/ScrollToTop/ScrollToTop";
import MobileTabs from "../Widgets/MobileTabs/MobileTabs";
import { Route, RouteComponentProps } from "react-router-dom";
import Ads from "../Home/Ads";
import Profile from "../Profile/Profile";

export default function Page(props: RouteComponentProps<{}>) {
  return (
    <div className="page">
      <Route exact path={props.match.url + "profile"} component={Profile} />
      <Route exact path={props.match.url} component={Ads} />
      <MobileTabs />
      <ScrollToTop />
    </div>
  );
}
