$(document).ready(function() {
	let arrayValidResultCheck = [];

    $("#insertBtn").on('click',function(){
        let memName = $('#memName').val();
        let memRnum1 = $('#memRnum1').val();
        let memRnum2 = $('#memRnum2').val();
        let memPnum1 = $('#memPnum1').val();
        let memPnum2 = $('#memPnum2').val();
        let memPnum3 = $('#memPnum3').val();
        let memEmail1 = $('#memEmail1').val();
        let memEmail2 = $('#memEmail2').val();
        let memSalary = $('#memSalary').val();
      	let memHdate =  $("#memHdate").val();
       	let jobCd = $('input:radio[name="jobCd"]:checked').val();
		
        let memRnumValue = memRnum1 + "-" + memRnum2;
        let memPnumValue = memPnum1 + "-" + memPnum2 + "-" + memPnum3;
        let memEmailValue = memEmail1 + "@" + memEmail2;
      
        
        if (!/^[가-힣]+$/.test(memName)) {
            arrayValidResultCheck.push(false);
            alert('이름은 한글만 입력하세요.');
            
            $("#memName").focus();
            $("#memName").attr('class','form-control form-control-danger');
            return;
        }else{
			$("#memName").attr('class','form-control form-control-success');		
		}
			
		

        if (!/^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))$/.test(memRnum1)) {
            arrayValidResultCheck.push(false);
            alert('주민등록번호 앞자리가 올바르지 않습니다.');
            $("#memRnum1").focus();
            $("#memRnum1").attr('class','form-control form-control-danger');
            return;
        }else{
			$("#memRnum1").attr('class','form-control form-control-success');
		}

        if (!/^[1-4][0-9]{6}$/.test(memRnum2)) {
            arrayValidResultCheck.push(false);
            alert('주민등록번호 뒷자리가 올바르지 않습니다.');
          	$("#memRnum2").focus();
            $("#memRnum2").attr('class','form-control form-control-danger');
            return;
        }else{
			$("#memRnum2").attr('class','form-control form-control-success');
		}

        if (!/^01[016789]-[0-9]{4}-[0-9]{4}$/.test(memPnumValue)) {
            arrayValidResultCheck.push(false);
            alert('핸드폰 번호가 올바르지 않습니다.');
            $('#memPnum1').attr('class','form-control form-control-danger');
        	$('#memPnum2').attr('class','form-control form-control-danger');
        	$('#memPnum3').attr('class','form-control form-control-danger');
            return;
        }else{
			 $('#memPnum1').attr('class','form-control form-control-success');
        	$('#memPnum2').attr('class','form-control form-control-success');
        	$('#memPnum3').attr('class','form-control form-control-success');
		}
        
        if(jobCd == null){
			alert("직무를 선택해주세요.");
			 arrayValidResultCheck.push(false);
			 return;
		}

        if (memSalary < 1000 || memSalary > 100000) {
            arrayValidResultCheck.push(false);
            alert('연봉은 0에서 100억 사이의 값을 입력하세요.');
             $('#memSalary').attr('class','form-control form-control-danger');
            return;
        }else{
			 $('#memSalary').attr('class','form-control form-control-success');
		}

        if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+$/.test(memEmailValue)) {
            arrayValidResultCheck.push(false);
            alert('전체 이메일 주소 형식이 올바르지 않습니다.');
            $('#memEmail1').attr('class','form-control form-control-danger');
        	$('#memEmail2').attr('class','form-control form-control-danger');
            return;
        }else{
			$('#memEmail1').attr('class','form-control form-control-success');
        	$('#memEmail2').attr('class','form-control form-control-success');
		}
        
     /*   if ($("#emailValue").val() != $("#emailValue2").val()){
			alert("인증번호가 일치하지 않습니다.")
			arrayValidResultCheck.push(false);
		}*/
		
        if (!/^\d{4}-\d{2}-\d{2}$/.test(memHdate)){
			alert("입사일을 입력하세요.")
			arrayValidResultCheck.push(false);
			 $('#memHdate').attr('class','form-control form-control-danger');
			return;
		}else{
			$('#memHdate').attr('class','form-control form-control-success');
		}
		
		if ($("#address_kakao").val() == ""){
			alert("주소를 입력하세요.")
			arrayValidResultCheck.push(false);
			 $('#address_kakao').attr('class','form-control form-control-danger');
			return;
		}else{
			$('#address_kakao').attr('class','form-control form-control-success');
		}
		
	

        // validResultcheck 배열 에서 false가 있다면 true가 담김 false 가 없으면 false이므로 정상 동작하게끔 짜주면 됨
        let validValue = arrayValidResultCheck.includes(false);

        // validValue는 false를 찾아서 값이 있으면 true를 넣어주기때문에 false일때가 정상적으로 검증이 끝났을 때다
        if(!validValue){
            $("#memRnum").val(memRnumValue);
            $("#memPnum").val(memPnumValue);
            $("#memEmail").val(memEmailValue);

            $("#memberInsertFrm").submit();
        }

        
    });

   /* $("#emailAthenticationBtn").on("click",function(){
		console.log("인증 요청 버튼 클릭");
		$('#emailShow').css('display', '');
		let memEmail1 = $('#memEmail1').val();
        let memEmail2 = $('#memEmail2').val();
		let memEmailValue = memEmail1 + "@" + memEmail2;
		$.ajax({
				url: "/member/emailAuthenticate",
				type: "get",
				data : {
					email: memEmailValue
				},
				success: function(data) {
					
					$("#emailValue2").val(data);

				}
			});
		
	});   */
          

    
});