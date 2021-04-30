export interface Photosdata {
  id: string,
  description: string,
  alt_description: string,
  width: number,
  height: number,
  urls: {
    raw?: string,
    full: string,
    regular?: string,
    small?: string,
    thumb?: string
  },
  links: {
    download: string
  },
  user: {
    name: string
  }
}
