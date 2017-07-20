var xl = require('node-xlrd');
exports.read = function(callback){
    var path = './product.xls';
    var datas = [];
    
    xl.open(path, function(err,bk){
        if(err) {console.log(err.name, err.message); return;}
        var shtCount = bk.sheet.count;
        for(var sIdx = 0; sIdx < shtCount; sIdx++ ){
            console.log('sheet "%d" ', sIdx);
            console.log('  check loaded : %s', bk.sheet.loaded(sIdx) );
            var sht = bk.sheets[sIdx],
                rCount = sht.row.count,
                cCount = sht.column.count;
            console.log('  name = %s; index = %d; rowCount = %d; columnCount = %d', sht.name, sIdx, rCount, cCount);
            for(var rIdx = 0; rIdx < rCount; rIdx++){    // rIdx：行数；cIdx：列数
                var data = [];
                for(var cIdx = 0; cIdx < cCount; cIdx++){
                    try{
                        data[cIdx] = sht.cell(rIdx,cIdx);
                        console.log('  cell : row = %d, col = %d, value = "%s"', rIdx, cIdx, sht.cell(rIdx,cIdx));
                    }catch(e){
                        console.log(e.message);
                    }
                }
                datas[rIdx] = data;
            }
        }
        callback(datas);
    });


};