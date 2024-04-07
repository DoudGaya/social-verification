import { ReactNode } from "react"

interface TwitterCardType {
    name: string
    username: string
    followers: string
    following: string
    profileImage: Image
    banner: Image
    location: string
    url: string
    dateJoined: string
    bio:string
    occupation: string
    verification: string
    pinnedPost: Post
    numberOfPosts: number
}

interface DashboardUrls {
    id: number
    name: string
    icon: ReactNode
}

interface Image {
    src: 'string'
    height: number,
    width: number
    alt: string
}

interface Post {
    body: string
    image: Image
    likes: string
    comments: string
    retweet: string
}