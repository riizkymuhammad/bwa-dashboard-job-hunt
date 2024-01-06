import { Button } from "../../button";
import { IoHomeOutline, IoCalendarOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegBuilding } from "react-icons/fa";
import { HiOutlineUsers, HiOutlineLogout, HiOutlineDocumentDuplicate } from "react-icons/hi";
import { GoGear } from "react-icons/go";


export default function SideBar() {
  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <IoHomeOutline className="mr-2 text-lg" />
              Home
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineMessage className="mr-2 text-lg" />
              Messages
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <FaRegBuilding className="mr-2 text-lg" />
              Company Profile
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <HiOutlineUsers className="mr-2 text-lg" />
              All Applicants
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none  hover:text-primary"
            >
              <HiOutlineDocumentDuplicate className="mr-2 text-lg" />
              Job Listings
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none  hover:text-primary"
            >
              <IoCalendarOutline className="mr-2 text-lg" />
              My Schedules
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <IoHomeOutline className="mr-2 text-lg" />
              Home
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <GoGear className="mr-2 text-lg" />
              Settings
            </Button>
            <Button
              variant={"ghost"}
              className="w-full text-red-500 justify-start rounded-none hover:bg-red-100 hover:text-red-500"
            >
              <HiOutlineLogout className="mr-2 text-lg" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
