//顶部变换颜色

var head = new Vue({
	el:'#wrapper',
	data:{
		message:'Time tick-ticks away.',
		getRandomColor: '#03a9f4'
	},
	methods:{
		getColor:function(){
			var letters = '0123456789ABCDEF';
    		var color = '#';
    		for(var i = 0;i<6;i++){
    			color += letters[Math.floor(Math.random() * 16)];
    		}
    		return color
		}
	}
})

var vm = new Vue({
	el:'main',
	data:{
		productLict:[]
	},
	filters:{

	},
	mounted:function(){
		this.cartView();
	},
	mounted:{
		cartView:function(){
			this.$http.get("cartData.json").then(res=>{
				this.productLict = res.body.result.list;
			})
		}
	}
})