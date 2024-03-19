"use client";
import { ReactNode, useState } from "react";

export type TableProps = {
  headers: {
    minWidth: string;
    text: string;
    code: string;
    hasOrdenation?: boolean;
    formatter?: (value: string) => string;
  }[];
  data: { [key: string]: string | number | any[] | null }[];
  subitemProperty?: string;
  subtableHeaders?: {
    minWidth: string;
    text: string;
    code: string;
    hasOrdenation?: boolean;
    formatter?: (value: string) => string;
  }[];
};

export function Table({
  headers,
  data,
  subitemProperty,
  subtableHeaders,
}: TableProps) {
  return (
    <div className="max-w-full overflow-x-auto pb-4">
      <table
        className={`${!!subitemProperty && "relative ml-4"} w-full table-auto`}
      >
        <thead>
          <tr className="bg-brandlight bg-opacity-[8%]">
            {headers.map((header) => (
              <th
                key={header.text}
                className={`min-w-[${header.minWidth}] px-2 py-4 text-center font-bold text-brand`}
              >
                {header.text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow
              key={index}
              headers={headers}
              subitemProperty={subitemProperty}
              item={item}
              subtableHeaders={subtableHeaders}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableRow({
  headers,
  subitemProperty,
  subtableHeaders,
  item,
}: {
  headers: TableProps["headers"];
  subitemProperty?: TableProps["subitemProperty"];
  subtableHeaders?: TableProps["subtableHeaders"];
  item: {
    [key: string]: string | number | any[] | null | TableProps["data"];
  };
}) {
  const [isSubitemVisible, setIsSubitemVisible] = useState(false);
  const subitemItems: any = subitemProperty ? item[subitemProperty] : null;

  return (
    <>
      <tr>
        {headers.map((header, headerIndex) => (
          <TableCell
            key={header.text + headerIndex}
            hasSubitem={headerIndex === 0 && !!subitemProperty && subitemItems}
            isSubitemOpen={isSubitemVisible}
            setIsSubitemOpen={() => setIsSubitemVisible(!isSubitemVisible)}
          >
            {header.formatter
              ? header.formatter(item[header.code]?.toString() ?? "")
              : item[header.code]}
          </TableCell>
        ))}
      </tr>

      {subitemItems && subtableHeaders && isSubitemVisible && (
        <td colSpan={headers.length}>
          {headers !== subtableHeaders ? (
            <table className={`w-full table-auto`}>
              <thead>
                <tr className="border-b border-brandlight">
                  {subtableHeaders.map((header) => (
                    <th
                      key={header.text}
                      className={`min-w-[${header.minWidth}] px-2 pb-2 pt-4 text-center font-bold text-brand`}
                    >
                      {header.text}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {subitemItems.map(
                  (
                    subitem: { [key: string]: string | number | any[] | null },
                    index: number,
                  ) => (
                    <TableRow
                      key={index}
                      headers={subtableHeaders}
                      item={subitem}
                    />
                  ),
                )}
              </tbody>
            </table>
          ) : (
            <tr>
              {headers.map((header, headerIndex) => (
                <TableCell key={header.text + headerIndex}>
                  {header.formatter
                    ? header.formatter(
                        (subitemItems &&
                          subitemItems[header.code]?.toString()) ??
                          "",
                      )
                    : subitemItems[header.code]}
                </TableCell>
              ))}
            </tr>
          )}
        </td>
      )}
    </>
  );
}

function TableCell({
  children,
  hasSubitem,
  isSubitemOpen,
  setIsSubitemOpen,
}: {
  children: ReactNode;
  hasSubitem?: boolean;
  isSubitemOpen?: boolean;
  setIsSubitemOpen?: () => void;
}) {
  return (
    <td
      className={`${!isSubitemOpen && "border-b border-[#eee]"} px-6 py-4 md:px-2`}
    >
      {hasSubitem && (
        <div
          style={{
            width: "1rem",
            height: "1rem",
            backgroundColor: isSubitemOpen ? "blue" : "red",
            position: "absolute",
            left: "-16px",
          }}
          onClick={setIsSubitemOpen}
        />
      )}

      <p className="whitespace-nowrap text-center text-black">{children}</p>
    </td>
  );
}
