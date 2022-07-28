import React from 'react';

const ParticipationsTable: React.FC = () => (
  <div className="relative rounded-xl overflow-x-auto">
    <table className="w-full text-sm text-left text-white">
      <thead className="text-xs uppercase text-slate-700 bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Event Code
          </th>
          <th scope="col" className="px-6 py-3">
            Full Name
          </th>
          <th scope="col" className="px-6 py-3">
            Role
          </th>
          <th scope="col" className="px-6 py-3">
            VIA Hours
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
            20210616
          </th>
          <td className="px-6 py-4">Teo Tiang Hao, Aaron</td>
          <td className="px-6 py-4">DEV</td>
          <td className="px-6 py-4">11.5</td>
          <td className="px-6 py-4">View</td>
        </tr>
        <tr className="border-b hover:bg-sky-600/25">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-white whitespace-nowrap">
            20210616
          </th>
          <td className="px-6 py-4">Andre Goh Song Jun</td>
          <td className="px-6 py-4">OIC</td>
          <td className="px-6 py-4">10</td>
          <td className="px-6 py-4">View</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export { ParticipationsTable };
