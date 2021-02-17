import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../modules/empleado/empleados.service';


declare var $ :any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit 
{
  loginbtn!:boolean;
  logoutbtn!:boolean;

  constructor( private empleado: EmpleadosService) 
  { 
    empleado.getLoggedInName.subscribe((name: boolean) => this.changeName(name));
    if(this.empleado.isLoggedIn())
    {
      console.log("loggedin");
      this.loginbtn=false;
      this.logoutbtn=true;
    }
    else
    {
      this.loginbtn=true;
      this.logoutbtn=false;
    }
  }

  ngOnInit(): void 
  {
  }

  private changeName(name: boolean): void 
  {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }
  
  logout()
  {
    this.empleado.deleteToken();
    window.location.href = "/inicio";
  }
}
