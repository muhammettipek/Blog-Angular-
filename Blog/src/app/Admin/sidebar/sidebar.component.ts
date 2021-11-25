import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SliderTable} from "../SliderTable/table.component";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

}
