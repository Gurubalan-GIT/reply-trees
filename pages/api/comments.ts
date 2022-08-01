const comments = (_req: any, res: any) => {
  return res.status(200).json({ comments: [{ name: 'test' }] })
}

export default comments
