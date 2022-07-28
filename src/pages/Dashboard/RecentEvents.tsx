import React from 'react';

const RecentEvents: React.FC = () => (
  <div className="relative rounded-xl overflow-x-auto">
    <table className="w-full text-sm text-left text-white">
      <thead className="text-xs uppercase text-slate-700 bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Event Code
          </th>
          <th scope="col" className="px-6 py-3">
            Event Name
          </th>
          <th scope="col" className="px-6 py-3">
            Event In-Charge
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
            20191211
          </th>
          <td className="px-6 py-4">Discord Games Night</td>
          <td className="px-6 py-4">Andre Goh Song Jun</td>
          <td className="px-6 py-4">View</td>
        </tr>

        <tr className="border-b hover:bg-sky-600/25">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-white whitespace-nowrap">
            20191211
          </th>
          <td className="px-6 py-4">Discord Games Night</td>
          <td className="px-6 py-4">Andre Goh Song Jun</td>
          <td className="px-6 py-4">View</td>
        </tr>

        <tr className="border-b hover:bg-sky-600/25">
          <th
            colSpan={4}
            className="px-6 py-4 text-white text-center whitespace-nowrap">
            No other events found.
          </th>
        </tr>
      </tbody>
    </table>
  </div>
);

export { RecentEvents };
