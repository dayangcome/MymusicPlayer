var app=new Vue({
	el:"#app",
	data:{
		query:"",
		musiclist:[],
		musicurl:"",
		cover:"picture/default.png",
		hotcom:[],
		show:false,
		mvurl:"",
		isshow:false
	},
	methods:{
		searchmusic:function(){
			var that=this
			axios.get("https://autumnfish.cn/search?keywords="+this.query)
			.then(function(response){
				that.musiclist=response.data.result.songs;
			},function(err){})
		},
		play:function(musicid){
			var that = this
			this.show=true
			axios.get("https://autumnfish.cn/song/url?id="+musicid)
			.then(function(response){
				that.musicurl=response.data.data[0].url
			},function(err){
				
			})
			axios.get("https://autumnfish.cn/song/detail?ids="+musicid)
			.then(function(response){
				that.cover=response.data.songs[0].al.picUrl
			},function(err){
			})
			axios.get("https://autumnfish.cn/comment/hot?type=0&id="+musicid)
			.then(function(response){
				that.hotcom=response.data.hotComments
			},function(err){})
		},
		playmv:function(mvid){
			var that=this
			axios.get("https://autumnfish.cn/mv/url?id="+mvid)
			.then(function(response){
				that.isshow=true
				that.mvurl=response.data.data.url
			},function(err){})
		},
		pauseshow:function(){
			this.isshow=false
		}
	}
})
