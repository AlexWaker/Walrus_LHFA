/*
/// Module: library
module library::library;
*/
module library::library {
    use std::string::{String};

    public struct All_Library has key, store {
        id: UID,
        libraries: vector<String>,
    }

    public struct Issue has key {
        id: UID,
        blob_id: String,
        name: String,
        uploader: address,
        upload_time: u64,
        fields: vector<String>,
    }

    public struct Library has key, store {  // 这应该是一个nft
        id: UID,
        name: String,
        image_url: String,
        all_issues: vector<String>, //保存该目录下所有issue的id
        creator: 
    }

    public struct Comment has key { //每隔24小时整理一份该文章下新增的评论，自动存成pdf并保存在walrus上
        id: UID,
        blob_id: String,
        tidy_time: u64,
        belong_to: String, //属于哪篇文章
    }


}