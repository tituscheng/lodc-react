export default class LodcDB {
  static query(sql, callback) {
    callback(false, "Nothign ", []);
    // var client = new Client({
    //   user: 'lodcmedia',
    //   host: 'lodc-dev.cuyqog5dyvi5.us-west-2.rds.amazonaws.com',
    //   database: 'lodc_dev',
    //   password: 'ilovejesus2016',
    //   port: 5432,
    // });
    // var client = new Client({
    //   user: 'tituscheng',
    //   host: 'localhost',
    //   database: 'lodc_dev',
    //   port: 5432
    // });
    // client.connect();
    // client.query(sql, (err, res) => {
    //   console.log("[query]: " + sql);
    //   if(err) { callback(err); }
    //   else if (res.rowCount > 0) {
    //     callback(null, res.rows, res.rowCount);
    //   } else {
    //     callback(null, res);
    //   }
    //   client.end();
    // })
  }
}
