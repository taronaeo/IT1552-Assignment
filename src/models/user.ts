import { Metadata } from '.';

export type UserModel = Metadata & {
  _uid: string;
  email: string;
  photo_url: string;
  display_name: string;
  membership_id: string;
};
