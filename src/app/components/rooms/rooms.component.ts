import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Room[];

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {

    this.roomService.getRooms().subscribe((rooms) => {

      this.rooms = rooms;
    });
  }

}
