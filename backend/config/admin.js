module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('7689574edd05d5f7435d2bf6f8438bc08e487b93a8abd4dde7d531b39bf35b9d44adb709dc6f2999bdbfe4702a3e0ded6c0dc1220ade543ce022387404ecc6ee5ec437ae5e3a0b6c12630ec7cbcdfd2c6b2a10d3b733e0d61e67a05dbdbba2746ca5ed9b7c9069cf8b26522e4d95930c7623b0362558ef66d6b26b3412951ea6'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
