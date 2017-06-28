-- created by vertabelo (http://vertabelo.com)
-- last modification date: 2017-04-24 14:12:32.991

-- tables
-- table: activity
create table flyway_test.activity (
    id bigint not null AUTO_INCREMENT,
    activity_number varchar(2000) not null,
    avaliable bigint not null,
    begintime timestamp not null,
    endtime timestamp not null,
    status int not null,
    product_id bigint not null,
    win_number varchar(2000),
    win_user_id bigint,
    constraint activity_pk primary key (id)
);

create table flyway_test.activity_ticket (
    id bigint not null AUTO_INCREMENT,
    activity_id bigint not null,
    ticket_number varchar(2000) not null,
    order_id  bigint,
    sort bigint not null,
    cversion bigint,
    constraint activity_ticket_pk primary key (id)
);


-- table: article
create table flyway_test.article (
    id bigint not null AUTO_INCREMENT,
    name varchar(2000) not null,
    rich_text text not null,
    createdate timestamp not null,
    modifydate timestamp,
    create_by_id bigint not null,
    modify_by_id bigint,
    constraint article_pk primary key (id)
);

-- table: cart
create table flyway_test.cart (
    id bigint not null AUTO_INCREMENT,
    activity_id bigint not null,
    count bigint not null,
    user_id bigint not null,
    constraint cart_pk primary key (id)
);

-- table: category
create table flyway_test.category (
    id bigint not null AUTO_INCREMENT,
    name varchar(2000) not null,
    parent_id bigint,
    constraint category_pk primary key (id)
);

-- table: order
create table flyway_test.corder(
    id bigint not null AUTO_INCREMENT,
    status int not null,
    total_price bigint not null,
    complete int not null,
    createdate timestamp not null,
    modifydate timestamp not null,
    create_by_id bigint not null,
    modify_by_id bigint not null,
    constraint order_pk primary key (id)
);

-- table: order_activity
create table flyway_test.order_activity (
    id bigint not null AUTO_INCREMENT,
    activity_id bigint not null,
    count bigint not null,
    user_id bigint not null,
    order_id bigint not null,
    constraint order_activity_pk primary key (id)
);

-- table: product
create table flyway_test.product (
    id bigint not null AUTO_INCREMENT,
    name varchar(3000) not null,
    introduction varchar(3000) not null,
    is_hot int not null,
    short_introduction varchar(3000) not null,
    price_type varchar(3000) not null,
    limit_flag bigint not null,
    limit_max bigint not null,
    photo_urls varchar(3000),
    detail_url varchar(3000),
    large_photo_urls varchar(3000),
    price bigint not null,
    total bigint not null,
    status int not null,
    article_id bigint not null,
    current_activity_id bigint,
    catagory_id bigint not null,
    create_by_id bigint not null,
    modify_by_id bigint not null,
    createdate timestamp not null,
    modifydate timestamp not null,
    constraint product_pk primary key (id)
);


-- table: user
create table flyway_test.cuser (
    id bigint not null AUTO_INCREMENT,
    email varchar(2000) ,
    level varchar(2000) not null,
    nick_name varchar(2000) ,
    login_name varchar(2000) ,
    real_name varchar(2000) not null,
    avatar varchar(2000) ,
    avatar_big varchar(2000) ,
    sex int,
    address varchar(2000) ,
    password varchar(2000) not null,
    phone varchar(2000) not null,
    status varchar(2000) not null,
    constraint user_pk primary key (id)
);

-- end of file.

