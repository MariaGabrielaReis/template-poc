import tw from "tailwind-styled-components";

export const DropdownContainer = tw.div<{
  open: boolean;
}>`${({ open }) => !open && "hidden"} translate transform overflow-hidden`;

export const DropdownContent = tw.ul`mb-5.5 mt-4 flex flex-col gap-2.5 pl-6`;
