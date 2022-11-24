var fs=require('fs');
fs.readFile('file1.txt',function(err,data)
{
    fs.appendFile('file2.txt',data,function(err)
    {
        if(err) throw err;
        console.log('Appended Successfully!');
    });
});