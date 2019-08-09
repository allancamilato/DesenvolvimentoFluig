var _xml;

$("#avaliarCandidato").click(function() {
	$.ajax({
		async: false,
		type: "GET",
		dataType: "xml",
		url: "xml/ECMWorkflowEngineService.xml",
		success: function(ret) {
			console.log(ret);
			_xml = $(ret);
		}
	});

	_xml.find("[name=nome]").text($("#nome").val());
	_xml.find("[name=linkedin]").text($("#linkedin").val());
	_xml.find("[name=perfil]").text($("#perfil").val());
	_xml.find("[name=email]").text($("#email").val());

	parent.WCMAPI.Create({
		url: "/webdesk/ECMWorkflowEngineService?wsdl",
		contentType: "text/xml",
		dataType: "xml",
		data: _xml[0],
		success: function(data) {
			FLUIGC.toast({
		        title: 'Processo Iniciado! ',
		        message: 'Continue a Avaliação de ' + $("#nome").val()+'.' ,
		        type: 'info'
		    });
		}
	});
});