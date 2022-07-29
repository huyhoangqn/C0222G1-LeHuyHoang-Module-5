export interface Ticket {
  id?: number;
  price?: number;
  fromPlace?: string;
  toPlace?: string;
  day?: string;
  time?: string;
  amount?: number;
  provider: {
    id?: number;
    name?: string
  };
}
