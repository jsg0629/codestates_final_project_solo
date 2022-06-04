export interface ITopTagData {
  id: number
  hashtag: string
}

export interface IArtworkData {
  artwork_id: number
  title: string
  imgURI: string
  price: string
  views: number
  owner_name: string
  like_count: number
  comment_count: string
  hashtags: string[] | string
}
