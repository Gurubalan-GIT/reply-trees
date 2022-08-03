import { data } from '@constants'

const comments = (_req: any, res: any) => {
  return res.status(200).json(data)
}

export default comments
