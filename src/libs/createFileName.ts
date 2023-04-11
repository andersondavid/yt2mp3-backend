async function createFileName(videoData) {
		const videoTitle: string = videoData.videoDetails.title
		const removeEspecialChar = videoTitle.replace(/\s+/g, '_')
		const shortenNname = removeEspecialChar.substring(0, 20)
		const newName = shortenNname + '_'+ Date.now() + '.mp3'

		return newName
}

export default createFileName