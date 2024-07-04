npm install --global gulp-cli
npm install --save-dev gulp

incluir script gulp 
"gulp": "gulp",

npm run gulp

adicionar ao gulpfile.js || todos modulos baixados pelo NPM{
    const gulp = require('gulp');
}
adicionar o export para realizar ação{
    exports.default = gulp.[series ou parallel](funcaoPadrao , dizOi)
}

// INSTALAR PLUGINS DO NODE (SASS, SOURCEMAPS, UGLIFY[MINIFICAR], OBFUSCATE[DIFICIL DE LER], IMAGEMIN[COMPRIME IMAGEM])

PLUGIN SASS:

npm install --save-dev gulp-sass
npm install --save-dev sass

REALIZAR A IMPORTAÇÃO NO GULPFILE{
    const sass = require('gulp-sass')(require('sass'));
}

FUNÇÃO COMPILAR SASS{
    function compilaSass(){

        // pasta de origem para a conversão

        return gulp.src('./source/styles/main.scss') //CRIAR ARQUIVO MAIN.SCSS

        //chama o plugin instalado

        .pipe(sass({
            outputStyle: 'copressed' // CRIA UM ARQUIVO MINIFICADO
        }))

        //Pasta de destino depois da conversão

        .pipe(gulp.dest('./build/styles))
    }
}

//ADICIONAR O EXPORT AO FIM DO DOCUMENTO
{
    exports.sass = compilaSass
}

RODAR O SASS = npm run gulp sass