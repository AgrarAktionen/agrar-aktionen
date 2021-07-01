import { Component, OnInit } from '@angular/core';
import {Item} from '../item-interface/item';
import {ItemService} from '../item-service/item.service';


@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit {

  items: Item [] = []

  constructor(private itemService: ItemService) { 
    this.itemService.getAll().subscribe(items => this.items = items)
  }

  ngOnInit(): void {
  
  }

  clicked(item: Item) {
    alert(`${item.artikelbezeichnung} ausgewählt`)
  }
}
