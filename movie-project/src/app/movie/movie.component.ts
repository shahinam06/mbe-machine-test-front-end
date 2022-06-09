import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  type = '';
  id = '';
  url = '';
  movies: any;
  movie: any;

  searchText: any;

  constructor(private activeRoute: ActivatedRoute, private http: HttpClient) { }


  // public movies = [
  //   {
  //     "id": 1,
  //     "title": "Beetlejuice",
  //     "year": "1988",
  //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
  //     "actors": "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
  //     "plot": "A couple of recently deceased ghosts contract the services of a \"bio-exorcist\" in order to remove the obnoxious new owners of their house."
  //   }

  // ]


  ngOnInit(): void {
    this.type = this.activeRoute.snapshot.params['type'];
    this.id = this.activeRoute.snapshot.params['id'];
    if (this.type==='trending'){
      this.url = 'http://localhost:4200/assets/data/db.json';
    }
    this.getMovie();
  }

  getMovie(){
    this.http.get(this.url).subscribe((movies) =>{
      this.movies = movies;
      let index = this.movies.findIndex(
        (movie: {id: string}) => movie.id ==this.id
      );
      if(index > -1){
        this.movie = this.movies[index];
      }
    });
  }
}
