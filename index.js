const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    region: 'us-east-1',
    endpoint: 'http://localhost:9000',
    accessKeyId: 'minioadmin',
    secretAccessKey: 'minioadmin',
    signatureVersion: 'v4',
    s3ForcePathStyle: true,
});

s3.createBucket({
    Bucket: "bigbucket"
}, (err, data) => {
    if (err) {
        console.error(err)
    } else {
        console.log(data)
    }
})
    
s3.listBuckets((err, data) => {
    if (err) {
        console.error(err)
    } else {
        console.log(data)
    }
})
