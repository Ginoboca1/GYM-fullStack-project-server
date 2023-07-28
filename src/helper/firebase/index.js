const admin = require('firebase-admin');

require('dotenv').config();

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.TYPE_FIREBASE,
    project_id: process.env.PROJECT_ID_FIREBASE,
    private_key_id: process.env.PRIVATE_KEY_ID_FIREBASE,
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC1qYGgdDuGM5W9\nfisSvOrq0edwoSdsMnDqi2aCTL3J8vsMVI8E6UbSaV+pFU+ExO4dSA0iJfbPa0CI\nseiwJ4WzMh4CDNJBnLNf2fidhtrH8RMRTG1tVu4ZJgWWPqDbIbb2u3pRvTSl27FA\nQqGp3qwPT5EAvedif3HNOyrHpUKcqZoX3DSRgL8jQ9om3l7aaVI2vFvBUDdudWUu\n2yFsyw0yoY2yjMcM7lAPRaGyBUi0hQfDEJ2vDQ/EzcVBgTzmlNTwwE6dRjTbyfc0\nVYcyXZAn2/GG5JmWbQ96U64yxswLHamTqUGX2Mpkl+68UN/dvMVmEfsRog8dmsBi\nkojDiPLbAgMBAAECggEADKFS4mGCa/O1Mv4NJ5nb6WSbp0CFGaguIph7kY6dWWeb\n3cEZSnmfk2yBGqPhKfV5Kq8CPsAN92DZFUftSiYNTSasYG8cxTQMYpsohmdEWcdg\nkIDUUNhM6JG0rLwA+gtPibsCJ6G0gd2S5slbLRDOvKfHCJqrdjUvJ9o3wLa0OWkR\nP7AhfKiP0G9EzxJTxoChR9mZpcuIUa5UcjnfknZEtMn1oGYlKLVtcG4gjV77MmNT\nU5DenEJVfqyBOPQ0t2IDJn1PuPYelIwVBV51f03IBzy9WrYJks7V3mKESE1QG3YK\nCM+7DUf9qfIMzB9zXAo+DAedBGYaYAmVkmVxltIoyQKBgQDm0a+gKzyEPHl9q5S9\nzjc3c+372lQenar564wuJAHOb/LSUCtL3S7/GhR9OSEDwelqYoFtfyKjbk1PX2fn\np1rmUTUKRbm/phBwk8Pi8ls4PMOzeJmGDEmmrB4KqN3SqwE0Hjzk72/tgv89XcHe\n+zRPe9Kv/RUa0GwN39aUpVD1CQKBgQDJevccfNl7pzbWfjOV7tEsEQxfiwCVz9PE\nMr6R9KkK5mC52OJydUwwIGSxGX2BhVRrEiwgegZcNnose1fpbQf0fonShuuS+k0z\nSCMi33Ez7ojw+ZFRWaEGlZxx94v3rK5W5zxx82JSDjGx5LX3uj5n6PlezMwsZI6Y\nqtkreNQlwwKBgGZhSaIkq2IIJOc+DOqnpkw9aqjUbY1q5+SUuwfYRsjXVQA+OQYc\nZHUYj0//4An3n93lNX1o7+dHzJjRO5g/3gzcpkcZKEu+j/ovQKrQTu/B3Bgl/Qq9\nNonsPCMERefkm9MPOnldTustuKLyjESobcp3pLsU6aCMI/F/gIFMVn1pAoGBAKa8\n2Jv+xo0KiNthfZdrGDf7s92tz0Irx/jqdcOcUfjvRsUGtAA9ClwZsrrNeYwipwYk\n99e4pGLTwq/lM4+954Ny5OQRPAtakWELJejKOYjcsv+ZyaUlI5mrXtkCIBdMFMte\neitjW87EaGPr/puQyex8ZUMLAT0LyuaVHTxYtli5AoGBALRocvGUcbFbMt+mDGHg\nW1/Wx9kOZAw7Ud7MviwP2GSsUXOKHfc6x9Gb4sfjkVKaqBFPshIjbRHlTgDIU1jn\nAhMe4Gbr1qNR8FAbby8MUgOS53yTkHZfeeWZEJkZT8Jm8bojh8Y1Fr2/4+ImvsZE\nAd6n5vP43JPnZO8dfboA9o8L\n-----END PRIVATE KEY-----\n',
    client_email: process.env.CLIENT_EMAIL_FIREBASE,
    client_id: process.env.CLIENT_ID_FIREBASE,
    auth_uri: process.env.AUTH_URI_FIREBASE,
    token_uri: process.env.TOKEN_URI_FIREBASE,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL_FIREBASE,
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL_FIREBASE,
    universe_domain: process.env.UNIVERSE_DOMAIN_FIREBASE,
  }),
});

module.exports = firebaseApp;
