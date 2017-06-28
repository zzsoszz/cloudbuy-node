var knex=require("./connect.js");

schema=knex.schema.withSchema('public');

schema.dropTableIfExists('activity');
schema.dropTableIfExists('activity_ticket');
schema.dropTableIfExists('article');
schema.dropTableIfExists('cart');
schema.dropTableIfExists('category');
schema.dropTableIfExists('corder');
schema.dropTableIfExists('order_activity');
schema.dropTableIfExists('product');
schema.dropTableIfExists('cuser');


schema.createTable('activity', function (table) {
  table.bigIncrements();
  table.string('activity_number').comment("活动期号");
  table.string('avaliable').comment("剩余奖票数");
  table.integer('status').comment("抽奖状态(1.进行中，2.揭晓中，3.完成)");
  table.string('product_id').comment("产品编号");
  table.string('win_number').comment("中奖号码");
  table.string('win_user_id').comment("中奖用户ID");
  table.timestamp("begintime");
  table.timestamp("endtime");
  table.timestamps();
});


schema.createTable('activity_ticket', function (table) {
  table.bigIncrements();
  table.bigInteger('activity_id').comment("活动编号");
  table.string('ticket_number').comment("奖票号码");
  table.bigInteger('order_id').comment("订单ID");
  table.bigInteger('sort').comment("排序ID");
  table.string('cversion').comment("版本号");
  table.timestamps();
})
;


schema.createTable('article', function (table) {
  table.bigIncrements();
  table.string('name');
  table.text('rich_text').comment("富文本内容");;
  table.bigInteger('create_by_id').comment("创建者ID");
  table.bigInteger('modify_by_id').comment("修改者ID");
  table.timestamps();
})

schema.createTable('cart', function (table) {
  table.bigIncrements();
  table.bigInteger('activity_id').comment("活动ID");
  table.bigInteger('count').comment("数量");;
  table.bigInteger('user_id').comment("用户ID");;
  table.timestamps();
})


schema.createTable('category', function (table) {
  table.bigIncrements();
  table.string('name').comment("分类名称");
  table.bigInteger('parent_id');
  table.timestamps();
})


schema.createTable('corder', function (table) {
  table.bigIncrements();
  table.string('status').comment("订单状态 1.待支付 2.待开奖(支付成功) 3.未中奖 4.已中奖 5.支付中 6.取消(支付失败)");;
  table.bigInteger('total_price').comment("订单总额");
  table.bigInteger('create_by_id');
  table.bigInteger('modify_by_id');
  table.timestamps();
})


schema.createTable('order_activity', function (table) {
  table.bigIncrements();
  table.bigInteger('activity_id').comment("活动编号");;
  table.bigInteger('count').comment("购买数量");
  table.bigInteger('user_id');
  table.bigInteger('order_id');
  table.timestamps();
})



schema.createTable('product', function (table) {
  table.bigIncrements();
  table.bigInteger('activity_id').comment("活动编号");;
  table.string('name').comment("购买数量");
  table.string('introduction').comment("产品介绍");
  table.bigInteger('short_introduction').comment("产品简短描述");
  table.bigInteger('is_hot').comment("是否热门0.否 1.是");
  table.bigInteger('price_type').comment("价格分类 1 2 3");
  table.bigInteger('limit_flag').comment("是否限量购买0.不限量 1.限量");
  table.bigInteger('limit_max').comment("最大购买数(当limit_flag=1字段生效)");
  table.string('photo_urls').comment("图片地址");
  table.string('detail_url').comment("详情地址(可以链接到京东商品详情)");
  table.string('large_photo_urls').comment("大图地址");
  table.bigInteger('price').comment("产品单价");
  table.bigInteger('total').comment("最大购买数(当limit_flag=1字段生效)");
  table.bigInteger('status').comment("产品状态(0.待发布，1.已发布)");
  table.bigInteger('article_id').comment("文章ID");
  table.bigInteger('current_activity_id').comment("当前活动ID");
  table.bigInteger('catagory_id').comment("分类ID");
  table.bigInteger('create_by_id');
  table.bigInteger('modify_by_id');
  table.timestamps();
})



schema.createTable('cuser', function (table) {
  table.bigIncrements();
  table.string('email').comment("邮箱");
  table.string('level').comment("用户等级");
  table.string('nick_name').comment("昵称");
  table.string('login_name').comment("登录名称");
  table.bigInteger('real_name').comment("真实姓名");
  table.bigInteger('avatar').comment("小头像地址");
  table.bigInteger('avatar_big').comment("大头像地址");
  table.string('sex').comment("1.男 2.女");
  table.string('address').comment("住址(邮寄使用)");
  table.string('password').comment("密码");
  table.string('phone').comment("电话号码");
  table.string('status').comment("用户状态0.正常 1.注销 2.被锁定");
  table.bigInteger('create_by_id');
  table.bigInteger('modify_by_id');
  table.timestamps();
})


.then(function(result){
    console.log(result);
})
;

