import { gql } from "@apollo/client";

export const QUERY_PRODUCT = gql`
  query getProduct($productId: ID!) {
    product(id: $productId) {
      id
      name
      brand {
        id
        name
      }
      pictureUrl
      lastRatingCount
      lastRatingValue
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  query getProduct($page: Int!) {
    products(pagination: { page: $page, size: 100 }) {
      id
      name
      brand {
        id
        name
      }
      pictureUrl
    }
  }
`;

export const QUERY_MARKETPLACES_LIST = gql`
  query getMarketplacesList(
    $productId: String!
    $date: String!
    $priceType: String!
    $typeSeller: String!
  ) {
    dashMarketplaceList(
      productId: $productId
      date: $date
      priceType: $priceType
      typeSeller: $typeSeller
    )
  }
`;

export const QUERY_MARKETPLACES = gql`
  query gatMarketplaces($page: Int!) {
    marketplaces(pagination: { page: $page, size: 100 }) {
      id
      name
      pictureUrl
    }
  }
`;

export const QUERY_PRICE_CHART = gql`
  query getPriceChartData(
    $dateRange: String!
    $formOfPayment: String!
    $marketplaceIds: [String!]
    $period: String!
    $productId: String!
    $typeSeller: String!
  ) {
    dashPriceChart(
      dateRange: $dateRange
      formOfPayment: $formOfPayment
      marketplaceIds: $marketplaceIds
      period: $period
      productId: $productId
      typeSeller: $typeSeller
    )
  }
`;

export const QUERY_TEMPERATURE_CHART = gql`
  query getTemperatureChartData(
    $dateRange: String!
    $formOfPayment: String!
    $marketplaceIds: [String!]
    $period: String!
    $productId: String!
    $typeSeller: String!
  ) {
    dashTemperatureTable(
      dateRange: $dateRange
      formOfPayment: $formOfPayment
      marketplaceIds: $marketplaceIds
      period: $period
      productId: $productId
      typeSeller: $typeSeller
    )
  }
`;
export const QUERY_PRESENCE_CHART = gql`
  query getPresenceChartData(
    $dateRange: String!
    $formOfPayment: String!
    $marketplaceIds: [String!]
    $period: String!
    $productId: String!
    $typeSeller: String!
  ) {
    dashPresenceBar(
      dateRange: $dateRange
      formOfPayment: $formOfPayment
      marketplaceIds: $marketplaceIds
      period: $period
      productId: $productId
      typeSeller: $typeSeller
    )
  }
`;
