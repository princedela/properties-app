import ScrollToTop from "../Widgets/ScrollToTop/ScrollToTop";
import MobileTabs from "../Widgets/MobileTabs/MobileTabs";
import { Route, RouteComponentProps } from "react-router-dom";
import Ads from "../Home/Ads";
import Profile from "../Profile/Profile";
import Create from "../Create/Create";

export default function Page(props: RouteComponentProps<{}>) {
  return (
    <div className="page" style={{ minHeight: "100vh" }}>
      <Route exact path={props.match.url + "profile"} component={Profile} />
      <Route exact path={props.match.url + "create-ads"} component={Create} />
      <Route exact path={props.match.url} component={Ads} />
      <MobileTabs />
      <ScrollToTop />
    </div>
  );
}
