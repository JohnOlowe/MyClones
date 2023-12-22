// xender: å›½é™…ç‰ˆ, shanchuan: å›½å†…ç‰ˆ, onetouch: alcatelç‰ˆ
var isInter = 'xender';
try{
	define([], function(){

		var onOff = {
		};
		onOff.init = (function(){
			
			return{
				getIsInter: function(){
					return isInter;
				}
			}
		})();
		
		return onOff;
	});
}catch(e){
	
}

