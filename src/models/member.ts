import { Metadata } from '.';

export type MemberModel = Metadata & {
  _uid: string;
  nickname: string;
  full_name: string;
  gender: 'Male' | 'Female';
  email: string;
  contact_number: string;
  home_number: string;
  current_school: string;
  graduating_class: string;
  graduating_year: number;
  name_of_nok: string;
  relationship_with_nok: string;
  contact_of_nok: string;
};
