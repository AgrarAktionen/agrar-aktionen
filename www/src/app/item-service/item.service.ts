import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Item} from '../item-interface/item';

const URL = "http://localhost:8080/api/item"

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private client : HttpClient) { }

  getAll() {
    return this.client.get<Item[]>(URL); 
  }
}
