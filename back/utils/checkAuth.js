import jwt from 'jsonwebtoken';

export default (req, res, next)=>{
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
    const hash_env = process.env.HASH;
    if (token) {
        try {
            const decoded = jwt.verify(token, hash_env);
            req.userId = decoded._id;
            next();
        } catch (err) {
            return res.status(403).json({
                message: 'Something is wrong with the token',
            })
        }
        
    } else {
        return res.status(403).json({
            message: 'No access',
        })
    }

}