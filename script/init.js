function init{


    function createArticle() {
        nbrArticle = 10;

        for (i = 0; i = nbrArticle; i++) {
            var article;
            var nomArticle;
            var titre;
            var img;
            var p;

            article = document.createElement("article");
            article.id = "art_" + i;
            nomArticle = article.id;
            titre = document.createElement("h1");
            titrer.id = "title_" + i;
            img = document.createElement("div");
            img.id = "media_" + i;
            p = document.createElement("p");

            document.getElementById('article-list').apppendChild(article);
            document.getElementById(nomArticle).appendChild(titre);
            document.getElementById(nomArticle).appendChild(h1);
            document.getElementById(nomArticle).appendChild(img);
            document.getElementById(nomArticle).appendChild(p);
        }
    }

    createArticle;

}



