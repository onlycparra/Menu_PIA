function validate(e){
	if($.input_pass.value=="1234"){
		Alloy.Globals.setting_on=true;
		index=Alloy.createController('index');
		input_pass.close();
	}
}

input_pass.addEventListener('android:back', function() {
	index=Alloy.createController('index');
	input_pass.close();
});