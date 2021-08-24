import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query getPages {
    pages {
      id
      heading
      slug
      body {
        text
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        text
      }
    }
  }
`

export const GET_PLACES = gql`
  query getPlaces {
    places {
      id
      slug
      name
      location {
        latitude
        longitude
      }
      description {
        text
      }
      gallery {
        url
        height
        width
      }
    }
  }
`

export const GET_PLACE_BY_SLUG = gql`
  query getPlaceBySlug($slug: String!) {
    place(where: { slug: $slug }) {
      id
      slug
      name
      location {
        latitude
        longitude
      }
      description {
        text
      }
      gallery {
        url
        height
        width
      }
    }
  }
`
