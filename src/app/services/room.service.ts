import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  rooms: Room[];

  constructor() {

    this.rooms = [
      { id: 1, title: 'Room1', imageUrl: 'assets/img/room.jpg', price: 10 },
      { id: 2, title: 'Room2', imageUrl: 'assets/img/room.jpg', price: 20 },
      { id: 3, title: 'Room3', imageUrl: 'assets/img/room.jpg', price: 30 },
    ]
   }

   getRooms(): Observable<Room[]> {

    return of(this.rooms);
   }
}
