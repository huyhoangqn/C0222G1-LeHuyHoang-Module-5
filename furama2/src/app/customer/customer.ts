export interface Customer {
  customerId?: string;
  customerName?: string;
  customerBirthday?: string;
  customerIdCard?: string;
  customerEmail?: string;
  customerGender?: number;
  customerPhone?: string;
  customerAddress?: string;
  customerType?: {
    customerTypeId: number;
    customerTypeName: string;
  };
}
