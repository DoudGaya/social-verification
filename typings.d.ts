interface TwitterCard {
    name: string
    username: string
    followers: number
    following: number
    profileImage: Image
    banner: Image
    location: string
    url: string
    bio:string
    occupation: string
    verification: string
    pinnedPost: Post
}

interface Image {
    src: 'string'
    height: number,
    width: number
    alt: string
}

interface Post {
    body: string
    image: ImageData
    likes: string
    comments: string
    retweet: string
}