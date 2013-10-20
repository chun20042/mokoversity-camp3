
/*
 * GET users listing.
 */
var mark=[];
exports.list = function(req, res){
  res.send("respond with a resource");
};
exports.save = function(req, res){
	mark.push(req.query.s);
  console.log("scores:"+mark);
};