
// TODO: This formatting is all for url-encoded forms. Consider using multi-part/formbody MIME
export default function(details){
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    return formBody.join("&");
}
