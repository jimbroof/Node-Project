exports.error404 = (req,res,next)=>{
    res.status(404).render('404');
   // res.send('<form action="/admin/add-product" method=POST><input type="text" name="title"><button type=submit>Add product</button></input></form>')
}