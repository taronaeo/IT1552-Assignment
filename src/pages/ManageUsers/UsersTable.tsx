import React from 'react';

const UsersTable: React.FC = () => (
  <div className="relative rounded-xl overflow-x-auto">
    <table className="w-full text-sm text-left text-white">
      <thead className="text-xs uppercase text-slate-700 bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Display Name
          </th>
          <th scope="col" className="px-6 py-3">
            Email Address
          </th>
          <th scope="col" className="px-6 py-3">
            Access Level
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b hover:bg-sky-600/25">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-white whitespace-nowrap">
            Aaron Teo
          </th>
          <td className="px-6 py-4">aaron.teo@riv-alumni.com</td>
          <td className="px-6 py-4">Administrator</td>
          <td className="px-6 py-4">View</td>
        </tr>
        <tr className="border-b hover:bg-sky-600/25">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-white whitespace-nowrap">
            Etosticity Rammington
          </th>
          <td className="px-6 py-4">etosticity@gmail.com</td>
          <td className="px-6 py-4">Anonymous</td>
          <td className="px-6 py-4">View</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export { UsersTable };
