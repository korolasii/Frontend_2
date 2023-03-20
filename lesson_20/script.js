let films

$('#search').submit(function (e) { 
    e.preventDefault();
    let searchText = document.getElementById('searchText').value
    $('.filmsAbout').html('');
    getFilms(searchText)
    document.getElementById('searchText').value = ''
});

$('.btnSearch').click(function (e) { 
    e.preventDefault();
    let searchText = document.getElementById('searchText').value
    $('.filmsAbout').html('');
    getFilms(searchText)
    document.getElementById('searchText').value = '' 
});

$('#btnClose').click(function (e) { 
    e.preventDefault();
    $('.popup').css('display', 'none');
    $('.films').html('');
});

function getFilms(search){
    axios.get(`http://www.omdbapi.com/?s=${search}&apikey=d74ec2af`).then((objectFilm) => {
        if(objectFilm.data.Response){
            films = objectFilm.data.Search,
            filmsOur = '';
            $.each(films, function (i, value) { 
                 filmsOur += `<div class='film film${i+1}'><img src="${value.Poster}"></div>`
            });
            $('.films').html(filmsOur);
        }if (objectFilm.data.Response == 'False'){
            $('.popup').css('display', 'block');
            $('.filmsAbout').html('');
            $('.films').html('');
        }
    }).catch((err) => {console.log(err);})
}

function getAboutFilms(Imdb){
    axios.get(`http://www.omdbapi.com/?i=${Imdb}&apikey=d74ec2af`).then((objectFilm) => {
        $('.filmsAbout').html(`<div class=ulFilm><div>Title: ${objectFilm.data.Title}</div><div>Year: ${objectFilm.data.Year}</div><div>Actors: ${objectFilm.data.Actors}</div><div>Awards: ${objectFilm.data.Awards}</div><div>BoxOffice: ${objectFilm.data.BoxOffice}</div><div>Country:${objectFilm.data.Country}</div></div><div class=AboutFilmText><h2>About Film</h2><p>${objectFilm.data.Plot}</p><div class=conteinerBtnWie><a href="https://www.imdb.com/title/${objectFilm.data.imdbID}" target="_blank" id=Wie>Смотреть трейлер</a>`); 
    }).catch((err) => {console.log(err);})
}

$(document).on("mouseover", ".film", function(e){
    e.preventDefault()
    let element = e.currentTarget
    $(element).addClass('filmActive');
});

$(document).on("mouseout", ".film", function(e){
    e.preventDefault()
    let element = e.currentTarget
    $(element).removeClass('filmActive');
});

$(document).on("click", ".film", function(e){
    e.preventDefault()
    let elementClass = e.currentTarget.className.substr(9,2)
    getAboutFilms(films[Number(elementClass)-1].imdbID)
});