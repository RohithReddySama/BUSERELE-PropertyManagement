import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,NgIf,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    
  }

  propertytypes:any[]=[{
    icon:'fa-building',
    name:'Apartments/Flats',
    propertiesCount:'123'
  },
  {
    icon:'fa-home',
    name:'Villa',
    propertiesCount:'127'
  },
  {
    icon:'fa-building',
    name:'Home',
    propertiesCount:'98'
  },
  {
    icon:'fa-building',
    name:'Office Space',
    propertiesCount:'25'
  },
  {
    icon:'fa-building',
    name:'Commercial Space',
    propertiesCount:'23'
  },
  {
    icon:'fa-building',
    name:'Studio Apartment',
    propertiesCount:'12'
  }
]
propertydetails:any[]=[{
    propertyimage:'assets/images/img1.png',
    propertyprice:'12000',
    propertyname:'Marvel Grenduer',
    propertyaddress:'202,pragathi nagar, Hyderabad',
    propertyarea:'1200',
    propertybeds:'2',
    propertybathrooms:'2',
    propertytype:'apartment'
},
{
  propertyimage:'assets/images/img1.png',
    propertyprice:'12000',
    propertyname:'Marvel Grenduer',
    propertyaddress:'202,pragathi nagar, Hyderabad',
    propertyarea:'1200',
    propertybeds:'2',
    propertybathrooms:'2',
    propertytype:'villa'
},
{
  propertyimage:'assets/images/img1.png',
    propertyprice:'12000',
    propertyname:'Marvel Grenduer',
    propertyaddress:'202,pragathi nagar, Hyderabad',
    propertyarea:'1200',
    propertybeds:'2',
    propertybathrooms:'2',
    propertytype:'apartment'
},
{
  propertyimage:'assets/images/img1.png',
    propertyprice:'12000',
    propertyname:'Marvel Grenduer',
    propertyaddress:'202,pragathi nagar, Hyderabad',
    propertyarea:'1200',
    propertybeds:'2',
    propertybathrooms:'2',
    propertytype:'apartment'
}
]

userreviews:any[]=[{
  username:'Chaitanya',
  userreview:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, laborum? Architecto, doloremque sequi! Rem ratione labore, ea excepturi quos molestiae autem eaque magni quo! Vel atque in dicta esse laborum eaque sed perspiciatis totam nisi itaque molestias hic labore a eligendi sapiente officiis delectus, modi deleniti corrupti culpa harum aspernatur nemo dolores repellendus? Optio veniam, ullam debitis iure natus, recusandae.',
  isExpanded: false
},
{
  username:'Rohith',
  userreview:'Optio veniam, ullam debitis iure natus, recusandae aut qui accusantium consequatur explicabo cum repudiandae nostrum consectetur, blanditiis vitae placeat ab exercitationem amet provident esse eveniet. Cum incidunt nam tempora vero quisquam impedit voluptas ipsum eligendi asperiores error deleniti aperiam tenetur eaque eveniet necessitatibus sint, vel totam ratione.',
  isExpanded: false
},
{
  username:'Abhishek',
  userreview:'Optio veniam, ullam debitis iure natus, recusandae aut qui accusantium consequatur explicabo cum repudiandae nostrum consectetur, blanditiis vitae placeat ab exercitationem amet provident esse eveniet. Cum incidunt nam tempora vero quisquam impedit voluptas ipsum eligendi asperiores error deleniti aperiam tenetur eaque eveniet necessitatibus sint, vel totam ratione.',
  isExpanded: false
}
]

showMore(review: any): void {
  review.isExpanded = !review.isExpanded;
}

}
