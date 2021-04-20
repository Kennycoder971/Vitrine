function init() {


    function createArticle() {

        var titles = ["Utah maîtrise les Lakers, Boston chute et Washington surprend", "Héroïque en Eurocoupe, Rob Gray (Monaco) retrouve son ancienne équipe en Jeep Élite", "Quelles sont les équipes les plus expérimentées en NBA ?", "Ekaterinbourg titré pour la troisième fois de suite en Euroligue"];
        var paragrs = ["Soirée tranquille pour le Utah Jazz sur le parquet des Los Angeles Lakers (111-97),tandis que la belle série des Boston Celtics a pris fin face à Chicago (96-102). Les Washington Wizards sont complètement relancés dans la course aux play-offs.", "L'arrière de Monaco Rob Gray, héros de la qualification en finale de l'Eurocoupe,retrouve mardi soir les Mets, dont il portait encore le maillot en octobre, avant de partir brusquement.", "Plutôt que de désigner une seule équipe, nous avons choisi six critères mélangeant âge, matches de play-offs ou encore titres. Ils permettent de voir que toutes les franchises ambitieuses n'appuient par sur les mêmes leviers question expérience."];

        //bien penser a initialiser i
        for (var i = 0; i < titles.length; i++) {
            var article;
            // var nomArticle;
            // var titre;
            // var img;
            // var p;
            // var titre_content;
            // var p_content;

            var ids = "art_";
            article = document.createElement("article");
            article.id = `${ids + i}`;

            // nomArticle = article.id;

            // titre = document.createElement("h1");
            // titre_content = document.createTextNode(titles[i]);
            // titre.id = "title_" + i;
            // titre.appendChild(titre_content);


            // img = document.createElement("div");
            // img.id = "media_" + i;


            // p = document.createElement("p");
            // p_content = document.createTextNode(p_content[i]);
            // p.appendChild(p_content);


            document.getElementById('article-list').appendChild(article);

            // document.getElementById(nomArticle).appendChild(titre);
            // document.getElementById(nomArticle).appendChild(h1);
            // document.getElementById(nomArticle).appendChild(img);
            // document.getElementById(nomArticle).appendChild(p);
        }
    }

    createArticle();

}