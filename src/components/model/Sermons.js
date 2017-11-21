import LodcDB from './LodcDB'
import format from 'string-format'

format.extend(String.prototype);

const $ = window.$;

export default class Sermons {
  // static getRecent(n, callback) {
  //   if(Number.isInteger(n)) {
  //     var sql = format("SELECT id, title::json, scripture::json, speaker::json, date, media::json FROM sermon ORDER BY date DESC LIMIT {}", n);
  //     LodcDB.query(sql, function(err, results, rowCount){
  //       if(err) { callback(false, err); }
  //       else if(rowCount > 0){
  //         callback(true, "Found recent sermons", results);
  //       } else {
  //         callback(false, "Found no recent sermons", []);
  //       }
  //     });
  //   }
  // }

  static getRecent(n, callback) {
    $.get("http://default-environment.tdtddkdkmp.us-west-2.elasticbeanstalk.com/api/sermon/recent", function(response, status){
      callback(response);
    });
  }
}
