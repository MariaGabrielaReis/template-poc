import tw from "tailwind-styled-components";

export const Container = tw.aside<{
  sidebarOpen: boolean;
}>`${({ sidebarOpen }) => (sidebarOpen ? "translate-x-0" : "-translate-x-full")} absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark`;

export const Header = tw.div`flex items-center justify-between gap-2 px-6 pt-5.5 lg:py-6.5`;

export const Content = tw.div`no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear`;

export const Menu = tw.nav`mt-5 px-4 pb-4 lg:mt-9 lg:px-6`;

export const MenuItem = tw.ul`mb-6 flex flex-col gap-1.5`;

export const Topic = tw.h3`my-4 ml-4 text-sm font-semibold text-brandextralight`;
