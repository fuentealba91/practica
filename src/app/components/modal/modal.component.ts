import { Component, OnInit } from '@angular/core';

declare var $ :any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void 
  {
    $(document).ready(function()
    {
       $("#mostrarmodal").modal('show');
       
       $("#myBtn").click(function()
       {
        $("#mostrarmodal").modal("hide");
       });
    });
  }
}
