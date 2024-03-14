import tw from "tailwind-styled-components";

export const Searchbar = tw.div`hidden sm:block`;

export const SearchButton = tw.button`absolute left-0 top-1/2 -translate-y-1/2 pb-2`;

export const SearchbarInput = tw.input`w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125 placeholder:text-white text-white`;

export const UserActions = tw.div`flex items-center gap-3 2xsm:gap-7`;

export const Actions = tw.ul`flex items-center gap-2 2xsm:gap-4`;
