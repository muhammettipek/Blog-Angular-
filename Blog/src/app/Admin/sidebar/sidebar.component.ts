import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {SliderTable} from "../SliderTable/table.component";
import {ActivatedRoute} from '@angular/router';
import {NavItem} from "../nav-item";
import {RestService} from "../rest.service";
import {VERSION}from '@angular/material/core';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  @ViewChild("appDrawer") appDrawer?: ElementRef;
  mod?: string;
yazi = "Hoşgeldiniz....."

    version=VERSION;


  navItems:NavItem[]=[

    {
      displayName:'Anasayfa',
      iconName:'home',
      route:''
    },
    {
      displayName:'Post',
      iconName:'recent_actors',
      route:'Post',
      children:[
        {
          displayName:'Post Table',
          iconName:'group',
          route:'admin/Post/posttable'

        },
        {
          displayName:'Post Form',
          iconName:'group',
          route:'admin/Post/postform',
        }
      ]

    },
    {
      displayName:'Slider',
      iconName:'recent_actors',
      route:'Slider',
      mod:"Slider",
      children:[
        {
          displayName: 'Slider Table',
          iconName: 'group',
          route:'admin/Slider/slidertable',

        },
        {
          displayName: 'Slider Form',
          iconName: 'group',
          route: 'admin/Slider/sliderform',
          mod:"Slider Form"
        }
      ],
    },

  ]



constructor(private route:Router,private restService:RestService) {}

  ngAfterViewInit() {
    this.restService.appDrawer = this.appDrawer;
  }

  ngOnInit(): void {

    this.restService.getmod().subscribe((a) => {
      this.mod= a
       this.yazi=a;
        console.log("a==",a)

    });


  }
  changemod(i:number,mod:string):void{
    this.restService.changemod(i,mod);
  }
        }
