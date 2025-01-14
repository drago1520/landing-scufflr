module.exports = {
  async redirects() {
    return [
      {
        source: '/about.html',
        destination: '/',
        permanent: true,
      },
      {
        source: "/assets/contact-46baa72c.html",
        destination: "/",
        permanent: true
      },
      {
        source: "/terms.html",
        destination: "/terms",
        permanent: true
      }
    ]
  },
}