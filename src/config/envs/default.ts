export const config = {
    db: {
        mongodb: process.env.MONGODB
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        refreshSecret: process.env.JWT_REFRESH_SECRET
    }
};