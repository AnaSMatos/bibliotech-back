export default async function tokenValidator(req, res, next) {
	const { authorization } = req.headers

	const token = authorization?.replace('Bearer ', '').trim()
	if (!token) return res.status(401).send('Unauthorized')
	res.locals.token = token

	next()
}