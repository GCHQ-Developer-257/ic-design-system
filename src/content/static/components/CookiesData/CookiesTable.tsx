import React from "react";
import { CookiesDataProps } from "./index";

const CookiesTable = ({ headers, data, caption }: CookiesDataProps) => (
  <table className="cookies-table">
    <caption>{caption}</caption>
    <thead>
      <tr>
        {headers.map((header: string) => (
          <th key={header}>
          <ic-typography variant="subtitle-small">{header}</ic-typography>
        </th>
      ))}
    </tr>
  </thead>
  <tbody>
    {data.map((cookieData: any) => (
      <tr key={cookieData.id}>
        {headers.map((header: string) => (
          <td key={`${cookieData.id}-${header}`}>{cookieData[header.toLowerCase()]}</td>
        ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default CookiesTable;
