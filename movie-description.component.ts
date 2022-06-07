
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.scss']
})
export class MovieDescritionComponent implements OnInit {

  searchText: any;

  constructor() { }


  public movies = [
    {
      "id": 1,
      "title": "Beetlejuice",
      "year": "1988",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
      "actors": "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
      "plot": "A couple of recently deceased ghosts contract the services of a \"bio-exorcist\" in order to remove the obnoxious new owners of their house."
    }

  ]


  ngOnInit(): void {

  }

}
