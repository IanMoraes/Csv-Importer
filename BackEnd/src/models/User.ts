interface User {
  id?: number;
  name: string;
  city: string;
  country: string;
  favorite_sport: string;
  created_at?: Date;
}

export default User;
