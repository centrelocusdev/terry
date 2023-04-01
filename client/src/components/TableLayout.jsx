import React from "react";

const TableLayout = ({ data }) => {
  return (
    <table className="overflow-x-auto mx-auto bg-white md:p-16 p-5 rounded mt-5">
      <thead className="text-gray-600">
      <th className="px-6 py-3 text-left font-semibold capitalize">
            S.No.
          </th>
        {Object.keys(data[0]).map((heading) => (
          <th className="px-6 py-3 text-left font-semibold capitalize">
            {heading.split('_').join(' ')}
          </th>
        ))}
      </thead>
      <tbody className="text-gray-600">
        {data.map((d, key) => (
          <tr className={`${key % 2 == 0 ? "bg-gray-50" : "bg-white"}`}>
            <td className="px-6 py-4 whitespace-nowrap">{key + 1}</td>
            {Object.values(d).map((v, i) => (
              <td className="px-6 py-4 whitespace-nowrap">{v}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableLayout;
