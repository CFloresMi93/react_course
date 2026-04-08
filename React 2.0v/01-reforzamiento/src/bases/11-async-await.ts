import type { GiphyRandomResponse } from "../data/giphy.response"


const API_KEY = "qO3xbfjpqtT84H20MnW0jrmSb7F6B1TI"

const createImageInsideDOM = (url: string) => {
    const imgElement = document .createElement('img')
    imgElement.src = url
    
    document.body.append(imgElement)
}

const getRandomGifUrl = async () : Promise<string> => {
    
    const myRequest = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`)
    const {data} : GiphyRandomResponse = await myRequest.json()

    const url : string = data.images.original.url
    return url
}

getRandomGifUrl()
    .then(createImageInsideDOM)
    .catch((err) => console.log(err))