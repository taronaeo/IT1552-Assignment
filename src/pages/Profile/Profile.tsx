import React from 'react';

import { Title, Heading } from '../../components';

const Profile: React.FC = () => (
  <div className="flex flex-col gap-4 mb-10">
    <Title>Your Profile</Title>

    <Heading>Personal Information</Heading>

    <div className="grid grid-cols-2 grid-flow-row gap-4">
      <div>
        <span className="text-sm">Membership ID</span>
        <div className="font-bold">yzpfkGl1uRvDc1WqIlrz</div>
      </div>

      <div>
        <span className="text-sm">Full Name</span>
        <div className="font-bold">Teo Tiang Hao, Aaron</div>
      </div>

      <div>
        <span className="text-sm">Gender</span>
        <div className="font-bold">Male</div>
      </div>

      <div>
        <span className="text-sm">Email Address</span>
        <div className="font-bold">aaron.teo@riv-alumni.com</div>
      </div>

      <div>
        <span className="text-sm">Contact Number</span>
        <div className="font-bold">+65 9182 2704</div>
      </div>

      <div>
        <span className="text-sm">Home Number</span>
        <div className="font-bold">-</div>
      </div>

      <div>
        <span className="text-sm">Graduating Class</span>
        <div className="font-bold">6F</div>
      </div>

      <div>
        <span className="text-sm">Graduating Year</span>
        <div className="font-bold">2015</div>
      </div>

      <div className="col-span-2">
        <span className="text-sm">Current School</span>
        <div className="font-bold">
          Nanyang Polytechnic, Cybersecurity &amp; Digital Forensics
        </div>
      </div>
    </div>

    <Heading>Emergency Contact Details</Heading>

    <div className="grid grid-cols-2 grid-flow-row gap-4">
      <div>
        <span className="text-sm">Name of Next-of-Kin</span>
        <div className="font-bold">Stanley Teo</div>
      </div>

      <div>
        <span className="text-sm">Relationship with Next-of-Kin</span>
        <div className="font-bold">Father</div>
      </div>

      <div>
        <span className="text-sm">Contact Number of Next-of-Kin</span>
        <div className="font-bold">+65 9794 3488</div>
      </div>
    </div>
  </div>
);

export { Profile };
