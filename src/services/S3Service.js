import S3FileUpload from 'react-s3';

export default class S3Service {



  /**
  * @param  {File} file query type
  * @return {String} ImageURL
  */
  static uploadFile(file) {
    const config = {
      bucketName: 'pinches3mecagas',
      region: 'us-east-2',
      accessKeyId: 'AKIAJ7DNBOHOZD6RVCGQ',
      secretAccessKey: '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',

    }
    console.log(config)

    S3FileUpload
      .uploadFile(file, config)
      .then(data => {
        return data.location;
      })
      .catch(err => console.error(err))
  }


}
