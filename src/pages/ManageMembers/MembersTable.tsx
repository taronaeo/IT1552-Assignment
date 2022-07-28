import React from 'react';

const MembersTable: React.FC = () => (
  <div className="relative rounded-xl overflow-x-auto">
    <table className="w-full text-sm text-left text-white">
      <thead className="text-xs uppercase text-slate-700 bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Full Name
          </th>
          <th scope="col" className="px-6 py-3">
            Gender
          </th>
          <th scope="col" className="px-6 py-3">
            Graduation Year
          </th>
          <th scope="col" className="px-6 py-3">
            Contact Number
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
            Teo Tiang Hao, Aaron
          </th>
          <td className="px-6 py-4">Male</td>
          <td className="px-6 py-4">2015</td>
          <td className="px-6 py-4">91822704</td>
          <td className="px-6 py-4">View</td>
        </tr>
        <tr className="border-b hover:bg-sky-600/25">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-white whitespace-nowrap">
            Andre Goh Song Jun
          </th>
          <td className="px-6 py-4">Male</td>
          <td className="px-6 py-4">2015</td>
          <td className="px-6 py-4">90608722</td>
          <td className="px-6 py-4">View</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export { MembersTable };
