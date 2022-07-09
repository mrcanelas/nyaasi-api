function parseItems (data) {
  return data.items.map(item => {
    return {
        name: item.title,
        hash: item.hash,
        date: new Date(item.isoDate),
        filesize: item.filesize,
        description: item.contentSnippet,
        category: item.category,
        sub_category: item.sub_category,
        torrent: item.link,
        seeders: item.seeders,
        leechers: item.leechers,
        completed: item.completed
      }
  })
}

module.exports = {
  parseItems
}