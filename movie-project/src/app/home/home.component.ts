import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies : any;
  searchText: any;

  constructor(private http: HttpClient, private router: Router, private activeRoute: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.getMovies();
  }
  
goToMovie(type: string, id: string) {
  this.router.navigate(['/movie', type, id]);
}

public genres = [

  {
      "id": 1,
      "name": "Comedy",
  },
  {
      "id": 2,
      "name": "Fantasy",
  },
  {
      "id": 3,
      "name": "Crime",
  },
  {
      "id": 4,
      "name": "Drama",
  },
  {
      "id": 5,
      "name": "Music",
  },
  {
      "id": 6,
      "name": "Adventure",
  },
  {
      "id": 7,
      "name": "History",
  },
  {
      "id": 8,
      "name": "Thriller",
  },
  {
      "id": 9,
      "name": "Animation",
  },
  {
      "id": 10,
      "name": "Family",
  },
  {
      "id": 11,
      "name": "Mystery",
  },
  {
      "id": 12,
      "name": "Biography",
  },
  {
      "id": 13,
      "name": "Action",
  },
  {
      "id": 14,
      "name": "Film-Noir",
  },
  {
      "id": 15,
      "name": "Romance",
  },
  {
      "id": 16,
      "name": "Sci-Fi",
  },
  {
      "id": 17,
      "name": "War",
  },
  {
      "id": 18,
      "name": "Western",
  },
  {
      "id": 19,
      "name": "Horror",
  },
  {
      "id": 20,
      "name": "Musical",
  },
  {
      "id": 21,
      "name": "Sport",
  },
]

getMovies(){
  this.http.get('http://localhost:4200/assets/data/db.json')
  .subscribe((movies) => {
     this.trendingMovies = movies;
     console.log(this.trendingMovies);
     
  });
}

 
}
