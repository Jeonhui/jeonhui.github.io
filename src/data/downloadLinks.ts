type Link = {
  name: string
  link: string
}

type DownloadLinks = {
  resume: Link
}

const downloadLinks: DownloadLinks = {
  resume: {
    name: "이력서",
    link: "https://drive.google.com/file/d/1oAlsdYnv8RVza0YUoLphEgbvI6v_hzXo/view?usp=drive_link",
  },
}

export default downloadLinks
