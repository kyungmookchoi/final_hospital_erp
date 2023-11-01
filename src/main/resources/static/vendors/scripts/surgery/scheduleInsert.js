$(document).ready(function(){   
	    
	var reservatorArray = new Array();
	$('.reservator').each(function(){
		reservatorArray.push($(this).attr('reservator'));
	});
	    
	var startArray = new Array();
	$('.start-time').each(function(){
		startArray.push(Number($(this).attr('timeid')));
	});
	
	var endArray = new Array();
	$('.end-time').each(function(){
		endArray.push(Number($(this).attr('timeid')));
	});
	
	for(var i = 0; i < 24; i++){
		for(var j = 0; j < startArray.length; j++){
			if(startArray[j] <= i*100 && i*100 < endArray[j]){
				$('#'+ i ).attr('class', 'f')
			}	
			if(startArray[j] == i*100){
				$('#'+ i ).append(reservatorArray[j])
			}
		}  
	}
	
});

$('.date-change-btn').click(function(){
	let paramDate = $(this).prev().val();
	let split = paramDate.split(" ")
	if(split[0].length > 2){
		location.reload();
	}else{
		let surCd = $('#surCd').val();
		let url = 'scheduleInsert?surCd='+surCd+'&&paramDate='+paramDate
		
		$('#hidden-link').attr('href', url)
		$('#hidden-link').get(0).click();
	}
});

/*$('.particiant-insert').click(function(){
	let mem = $('.particiant-select').val()
	let plus = '<span class="tag label label-info class="surgerymember">'+ mem +'<span data-role="remove" class="remove"></span></span>';
    $("#particiant-place").append(plus);
});

$('.all-particiant-delete').click(function(){
    $("#particiant-place").empty();
});*/

/*$('.remove').click(function(){
	$(this).parent().remove();
});*/

$('#schedule-insert-btn').click(function(){
	var check = confirm('선택하신 시간으로 예약 하시겠습니까?')
	
	if(check){
		let date = $('.param-date').attr('id');
		let surgeryStart = Number($('.surgery-start').val());
		let surgeryEnd = Number($('.surgery-end').val());
		let surCd = Number($('#surCd').val());
		
		if(surgeryStart >= surgeryEnd){
			alert('예약 시간을 다시 확인해주세요.');
		}else{
				$.ajax({
		  	type : 'post',
		    url : '/surgery/reservation',
		    async: false,
		    data : {
				 paramDate : date,
				 sTime : surgeryStart,
				 eTime : surgeryEnd,
				 surCd : surCd
			},
		    success : function(result) {
				if(result=='x'){
					alert('예약 시간을 다시 확인해주세요.');
				}else{
					window.location.replace(result)
					alert('수술실 예약 완료되었습니다. (' + date +': '+surgeryStart+'시 ~ '+surgeryEnd+'시)')
				}
			}
	 	})
		}
	}
});