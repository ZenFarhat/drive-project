import {
  DeleteOutlined,
  ImportantDevices,
  InsertDriveFile,
  PeopleAlt,
  QueryBuilder,
  StarBorderTwoTone,
  Storage,
} from "@material-ui/icons";
import "../../styles/Sidebar.css";
import React from "react";
import NewFile from "./NewFile";
import SidebarItem from "./SidebarItem";

function Index() {
  return (
    <div className='sideBar'>
      <NewFile />
      <div className='siderbar__itemsContainer'>
        <SidebarItem arrow icon={<InsertDriveFile />} label={"My Drive"} />
        <SidebarItem arrow icon={<ImportantDevices />} label={"Computers"} />
        <SidebarItem icon={<PeopleAlt />} label={"Shared with me"} />
        <SidebarItem icon={<QueryBuilder />} label={"Recent"} />
        <SidebarItem icon={<StarBorderTwoTone />} label={"Starred"} />
        <SidebarItem icon={<DeleteOutlined />} label={"Bin"} />
        <hr />
        <SidebarItem icon={<Storage />} label={"Storage"} />
      </div>
    </div>
  );
}

export default Index;
