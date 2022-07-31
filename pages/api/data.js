const data = (req, res) => {
  return res.status(200).json({ comments: [{ name: "test" }] });
};

export default data;
