"use client";
import Link from "next/link";
import { useState } from "react";
import { DropdownContainer, DropdownContent } from "./SidebarLinkGroup.styles";

type SidebarLinkGroupProps = {
  pathname: string;
  item: {
    area: string;
    pages: { page: string; url: string }[];
  };
};

export function SidebarLinkGroup({ pathname, item }: SidebarLinkGroupProps) {
  const [open, setOpen] = useState<boolean>(pathname.includes(item.area));

  const handleClick = () => setOpen(!open);

  return item.area !== "" ? (
    <li>
      <Link
        href="#"
        className={`hover:bg-brand text-graylight group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out ${
          open && "bg-brand"
        }`}
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        {item.area}
        <svg
          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
            open && "rotate-180"
          }`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
            fill=""
          />
        </svg>
      </Link>

      <DropdownContainer open={open}>
        <DropdownContent>
          {item.pages.map((page) => (
            <li key={page.url}>
              <Link
                href={`/${page.url}`}
                className={`group relative flex items-center gap-2.5 rounded-md px-2 font-medium text-gray duration-300 ease-in-out hover:text-white ${
                  pathname.includes(page.url) && "text-white"
                }`}
              >
                {page.page}
              </Link>
            </li>
          ))}
        </DropdownContent>
      </DropdownContainer>
    </li>
  ) : (
    <>
      {item.pages.map((page) => (
        <li>
          <Link
            href={`/${page.url}`}
            className={`hover:bg-brand text-graylight flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out ${
              pathname.includes(page.url) && "bg-brand"
            }`}
          >
            {page.page}
          </Link>
        </li>
      ))}
    </>
  );
}
