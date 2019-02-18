import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.open();
  }

  open() {
    const modalRef = this.modalService.open(SingleMovieComponent);
    modalRef.componentInstance.name = 'World';
  }
}
