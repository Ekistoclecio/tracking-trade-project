export interface BrandProduct {
  __typename: string;
  id: string;
  name: string;
}

export interface ProductData {
  __typename: string;
  id: string;
  name: string;
  brand: BrandProduct;
  pictureUrl: string | null;
  lastRatingCount?: number | null;
  lastRatingValue?: number;
}

export interface DataListMarketplace {
  __typename: string;
  id: string;
  instalment_price: string;
  instalment_rrp: number;
  name: string;
  shareCustumer: number;
  spot_price: string;
  spot_rrp: number;
  url: string | null;
}

export interface Marketplace {
  __typename: string;
  id: string;
  name: string;
  pictureUrl: string | null;
}

export interface ChartProps {
  type: "price" | "temperature" | "presence";
  titleChart: string;
  renderingTime: number;
}

export interface CustomDatePickerProps {
  date: Date;
  setDate: (val: any) => void;
}

export interface MarketplaceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface LoginModalProps {
  show: boolean;
  closeModal: () => void;
}

export interface HeaderProps {
  toggleSideBar: (val: boolean) => void;
  sideBarIsOpen: boolean;
}
