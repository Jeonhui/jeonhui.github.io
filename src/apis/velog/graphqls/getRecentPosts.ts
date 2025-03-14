import { gql } from "@apollo/client"

export const GET_RECENT_POSTS = gql`
  query RecentPosts($cursor: ID, $limit: Int) {
    recentPosts(cursor: $cursor, limit: $limit) {
      id
      title
      short_description
      thumbnail
      user {
        id
        username
        profile {
          id
          thumbnail
          display_name
        }
      }
      url_slug
      released_at
      updated_at
      comments_count
      tags
      is_private
      likes
    }
  }
`
