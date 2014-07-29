$(document).ready(function(){
	function vaibuscarasissues(){
		function GithubRepo(username, reponame){
			GithubRepo.prototype.repo = 'https://api.github.com/repos/'+username+'/'+reponame+'/issues';
			
			GithubRepo.prototype.busca_issues_e_popula_tabela = function(table){
				$.ajax({
					url: this.repo,
					dataType: 'json',
					success: function(issues){
						if( typeof issues == 'string' ){
							issues = JSON.parse(issues);
						}
						console.log(issues);
						$.each(issues, function(){
							var html = '<tr>';
							html 	+= '<td>'+this.number+'</td><td>'+this.title+'</td>';
							html 	+= '</tr>'
							$(table).append(html)
						});
					},
					error: function(zica){
						console.log(zica);
						console.log('deu zica aqui mano: ' + this.repo);
					},
					complete: function(){
						var tr =$(table).find('td').parent();
						tr.removeClass('odd');
						tr.filter(':odd').addClass('odd');
					}
				});
			}
		}
		var username = $('#user').val();
		var reponame = $('#reponame').val();

		var le_repo = new GithubRepo(username, reponame);
		le_repo.busca_issues_e_popula_tabela("#issuestable");
	}

	$('#btn-busca').click(function(){
		vaibuscarasissues();
	});
});