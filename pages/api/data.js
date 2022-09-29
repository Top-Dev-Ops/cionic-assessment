export default function handler(req, res) {
  const { upperLeg, lowerLeg } = JSON.parse(req.body)
  if (upperLeg == 0) {
    return res.status(500).send('Upper leg must be greater than 0')
  }
  if (lowerLeg == 0) {
    return res.status(500).send('Lower leg must be greater than 0')
  }
  return res.status(200).send('Success')
}
