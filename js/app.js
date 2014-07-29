$(document).ready(function(){
	function vaibuscarasissues(){
		var username = $('#user').val();
		var reponame = $('#reponame').val();

		function GithubRepo(username, reponame){
			var url = "https://api.github.com/repos/"+username+"/"+reponame+"/issues";
			$.get(url).success(function(data){
				console.log(data);
				window.issues = JSON.parse(data);
			});			
			return {
				busca_issues_e_popula_tabela : function(table){
					$(table).html(issues);
				},
			}
		}

		//mais um pouco de codigo aqui....

		var le_repo = GithubRepo(username, reponame);
		le_repo.busca_issues_e_popula_tabela("#issuestable");
	}
	$('.box button').click(function(){

		if($('#user').val() == '' || ($('#reponame').val() == '')){
			alert('Preencha os campos!');
		} else {
			vaibuscarasissues();
		}
	})
});