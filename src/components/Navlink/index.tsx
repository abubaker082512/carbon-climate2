import React, { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import Link from "next/link";
import {
  Action,
  Analytics,
  AnalyticsDark,
  Customer,
  Dashboard,
  DashboardDark,
  IconType,
  Investment,
  Learn,
  Power,
  Pyramid,
  PyramidDark,
} from "@/assets/svg";
import DiscloseMenu from "../DiscloseMenu";
import Disclosure from "../Disclosure";
import { usePathname } from "next/navigation";

type SubMenuProps = {
  label: string;
  isActive: boolean;
  href: string;
  subLinks: Array<{ label: string; href: string }>;
};

type Props = {
  href: string;
  isActive: boolean;
  label: string;
  icon: IconType;
  dropDown: boolean;
  subMenu: Array<SubMenuProps> | null;
};

export type NavlinkType = Props;
const Navlink: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const { icon, href, isActive, label, dropDown, subMenu } = props;
  const path = usePathname();
  return (
    <div className="flex flex-col ">
      <div
        className={`px-[22px] py-3 text-lg  ${
          isActive
            ? "text-[#00401A] bg-[#BAE2D7] font-semibold"
            : "text-[#08120F] bg-[#EEF8F5] font-medium"
        }  w-full flex justify-between`}
      >
        <Link href={href}>
          <div className="flex items-center gap-3">
            <DashboardIcon icon={icon} isActive={isActive} />
            {label}
          </div>
        </Link>
        <div
          className="cursor-pointer"
          onClick={(e) => setOpen((value) => !value)}
        >
          {subMenu && subMenu.length > 0 && (
            <>{!open ? <IconChevronDown stroke={2} /> : <IconChevronUp />}</>
          )}
        </div>
      </div>
      {open && subMenu !== null && subMenu.length > 0 && (
        <div className="flex flex-col gap-4 py-4 bg-[#DCF0EB] mb-4  rounded-b-[20px]">
          {subMenu.map((item, index) => {
            return (
              <div
                key={"item-" + index}
                className={`px-[22px] font-normal text-lg text-[#4B4B4B] ${
                  !path.includes(item.href) && "text-opacity-70"
                } `}
              >
                <Disclosure
                  disabled={!item.subLinks?.length}
                  label={<Link href={item.href}>{item.label}</Link>}
                >
                  <SubMenu {...item} key={"subMenu-" + index} />
                </Disclosure>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navlink;

type DashboardIconProps = {
  icon: IconType;
  isActive: boolean;
};
export const DashboardIcon: React.FC<DashboardIconProps> = (props) => {
  const { icon, isActive } = props;

  if (icon === "dashboard" && !isActive) return <Dashboard />;
  if (icon === "dashboard" && isActive) return <DashboardDark />;
  if (icon === "pyramid" && !isActive) return <Pyramid />;
  if (icon === "pyramid" && isActive) return <PyramidDark />;
  if (icon === "analytics" && !isActive) return <Analytics />;
  if (icon === "analytics" && isActive) return <AnalyticsDark />;

  if (icon === "learn" && !isActive) return <Learn />;
  if (icon === "action") return <Action />;
  if (icon === "investment") return <Investment />;
  if (icon === "customer") return <Customer />;
  if (icon === "power") return <Power />;

  return null;
};

export const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { subLinks } = props;
  return (
    <ol className="px-[22px] font-normal text-lg text-white text-opacity-70 w-full flex justify-between py-4 flex-col gap-4">
      {subLinks.map((sublink, index) => {
        return (
          <div
            className="flex items-center gap-3 text-sm"
            key={"sublink-" + index}
          >
            <div className="bg-[#4B4B4B] opacity-70  rounded-full w-2 h-2"></div>
            <Link href={sublink.href} className="text-[#4B4B4B]">
              {sublink.label}
            </Link>
          </div>
        );
      })}
    </ol>
  );
};

type SubLinkProps = {
  label: string;
  href: string;
};
export const SubLink: React.FC<SubLinkProps> = (props) => {
  const { href, label } = props;
  return (
    <Link
      href={href}
      className="px-[22px] font-normal text-lg text-white text-opacity-70 w-full flex justify-between"
    >
      {label}
    </Link>
  );
};
