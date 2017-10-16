export default {
	agregarNoticia(noticia) {
		const noticias = this.traerNoticias();
		noticias.push(noticia);
		localStorage.setItem('news', JSON.stringify(noticias));
	},
	traerNoticias() {
		const noticias = localStorage.getItem('news') || '[]';
		return JSON.parse(noticias);
	},

	traerNoticiaById(id){
		const noticias = localStorage.getItem('news') || '[]';
		return JSON.parse(noticias).parse(noticia=> noticia.id=id);
	},

	getUltimoId(){
		const noticias=traerNoticias();
		if(noticias.lenght>=1){
			return noticias[(lenght-1)].id+1;
		}
		else{
			return 5;
		}
	}
}