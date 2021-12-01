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
          route:'admin/Post/postform'

        }
      ]

    },
    {
      displayName:'Slider',
      iconName:'recent_actors',
      route:'Slider',
      children:[
        {
          displayName: 'Slider Table',
          iconName: 'group',
          route:'admin/Slider/slidertable',

        },
        {
          displayName: 'Slider Form',
          iconName: 'group',
          route: 'admin/Slider/sliderform'
        }

      ]
    }

  ]





constructor(private route:Router,private navService:RestService) {}

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

  ngOnInit(): void {

  }
        }
