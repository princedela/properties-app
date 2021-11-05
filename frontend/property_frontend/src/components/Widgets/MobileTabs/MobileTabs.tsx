import React, { useState } from "react";
import "./mobile-tabs.css";
import { FaChartLine } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import {
  MdOutlineAddchart,
  MdOutlineAddBusiness,
  MdOutlineManageAccounts,
  MdOutlineHome,
} from "react-icons/md";
import { BsLightning } from "react-icons/bs";
import TabItem from "./TabItem";

export default function MobileTabs() {
  const [tabsState, setTabsState] = useState({
    activeTab: 1,
    activeClassName: "active",
  });

  function onClickTab(id: number) {
    setTabsState((currVal) => ({ ...currVal, activeTab: id }));
  }

  function checkActive(id: number): string {
    return tabsState.activeTab === id ? tabsState.activeClassName : "";
  }
  return (
    <div className="mobile-tabs">
      <TabItem
        Icon={MdOutlineHome}
        text="Home"
        classes={`${checkActive(1)}`}
        onClick={() => onClickTab(1)}
      />
      <TabItem
        Icon={MdOutlineAddBusiness}
        text="Create"
        classes={`${checkActive(2)}`}
        onClick={() => onClickTab(2)}
      />
      <TabItem
        Icon={FaChartLine}
        text="My Ads"
        classes={`${checkActive(3)}`}
        onClick={() => onClickTab(3)}
      />
      <TabItem
        Icon={BsLightning}
        text="Promote"
        classes={`${checkActive(4)}`}
        onClick={() => onClickTab(4)}
      />
      <TabItem
        Icon={MdOutlineManageAccounts}
        text="Profile"
        classes={`${checkActive(5)}`}
        onClick={() => onClickTab(5)}
      />
    </div>
  );
}
