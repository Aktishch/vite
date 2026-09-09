import { isEn } from '@utils/is-en'

interface FileOptions {
  file: File
  url: string
}

export const uploadFile = (file: File) => {
  return new Promise<FileOptions>((resolve, reject) => {
    const reader = new FileReader()

    const setError = () => {
      reject(isEn ? 'File upload error' : 'Ошибка при загрузке файла')
    }

    const readFile = () => {
      if (reader.result) {
        resolve({ file, url: reader.result.toString() })
      } else {
        setError()
      }
    }

    reader.addEventListener('load', readFile)
    reader.addEventListener('error', setError)
    reader.readAsDataURL(file)
  })
}
