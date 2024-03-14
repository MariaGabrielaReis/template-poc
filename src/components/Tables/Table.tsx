import { Package } from "@/types/package";
import { ReactNode } from "react";

const packageData: Package[] = [
  {
    name: "Free package",
    price: 0.0,
    invoiceDate: `Jan 13,2023`,
    status: "Paid",
  },
  {
    name: "Standard Package",
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: "Paid",
  },
  {
    name: "Business Package",
    price: 99.0,
    invoiceDate: `Jan 13,2023`,
    status: "Unpaid",
  },
  {
    name: "Standard Package",
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: "Pending",
  },
];

type TableProps = {
  hasSubitems?: boolean;
  headers: {
    minWidth: string;
    text: string;
    code: string;
    hasOrdenation?: boolean;
    formatter?: (value: string) => string;
  }[];
  data: { [key: string]: string | number | any[] | null }[];
};

export function Table({ headers, data, hasSubitems }: TableProps) {
  const keys = Object.keys(data[0]);

  return (
    <div className="max-w-full overflow-x-auto pb-4">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-brandlight bg-opacity-[8%]">
            {headers.map((header) => (
              <th
                key={header.text}
                className={`min-w-[${header.minWidth}] text-brand px-2 py-4 text-center font-bold`}
              >
                {header.text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <TableCell key={header.text + index}>
                  {header.formatter
                    ? header.formatter(item[header.code]?.toString() ?? "")
                    : item[header.code]}
                </TableCell>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableCell({ children }: { children: ReactNode }) {
  return (
    <td className="border-b border-[#eee] px-6 py-4 md:px-2">
      <p className="whitespace-nowrap text-center text-black">{children}</p>
    </td>
  );
}
