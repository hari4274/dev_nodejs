const QRCode = require('qrcode')

const getQr = (request, response) => {
    const qrInput = request.params.qrInput
    const size = request.params.size || 200
    var opts = {
        errorCorrectionLevel: 'H',
        // type: 'image/jpeg',
        width: size,
        // rendererOpts: {
        //   quality: 0.3
        // }
      }
    response.setHeader('content-type','image/png');
    QRCode.toFileStream(response, qrInput, opts);
}

module.exports = {
    getQr,
}