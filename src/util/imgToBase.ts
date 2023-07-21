export async function imgToBase64(url,imgType) {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.src = url
        image.onload = () => {
            const canvas = document.createElement('canvas')
            canvas.width = image.width
            canvas.height = image.height
            canvas.style.width = `${canvas.width / window.devicePixelRatio}px`
            canvas.style.height = `${canvas.height / window.devicePixelRatio}px`
            const ctx = canvas.getContext('2d')
            if (!ctx) {
                return null
            }
            ctx.drawImage(image, 0, 0)

            return resolve({
                imgData:image,
                ratio : image.width / image.height,
                base64:canvas.toDataURL(imgType)
            })
        }
        image.onerror = (err) => {
            return reject(err);
        }
    })
}

export function imageToBlob(image) {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;

        context.drawImage(image, 0, 0);

        canvas.toBlob((blob) => {
            resolve(blob);
        });
    });
}
