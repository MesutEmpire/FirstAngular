import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  ServerCreationStatus = "No server is created"
  serverName = "Test Server"
  serverShow = false;
  constructor() {
    setTimeout(() =>{
      this.allowNewServer= true;
    },2000 )
   }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverShow = true;
    this.ServerCreationStatus = "Server was Created " + this.serverName;
   
  }
  onUpdateServeName(event:any){
    console.log(event);
    this.serverName = event.target.value
  } 

}