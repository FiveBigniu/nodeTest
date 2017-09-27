var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '',       
  port: '3306',                   
  database: 'sheila'
}); 
 
connection.connect(function(err){
	if(err){
		console.log('连接失败');
	}else{
		console.log('连接成功');
		connection.query("CREATE TABLE person(id int,user varchar(255),password varchar(255))", function(err, result){
			if(err) {
				throw err
			}else {
				console.log('创建表成功');
			}
		})
	}
});
 //
// var  sql = 'SELECT * FROM websites';
// //查
// connection.query(sql,function (err, result) {
//         if(err){
//           console.log('[SELECT ERROR] - ',err.message);
//           return;
//         }
 
//        console.log('--------------------------SELECT----------------------------');
//        console.log(result);
//        console.log('------------------------------------------------------------\n\n');  
// });
 
// connection.end();