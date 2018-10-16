import { Component, OnInit } from '@angular/core';
import { ViewChild } from "@angular/core";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  showFiller = false;
  ctx: CanvasRenderingContext2D;
  startLine = false;
  selectedDrawingObject: string;
  selectedToDrag: boolean = false;
  pos1: number = 0;
  pos2: number = 0;
  pos3: number = 0;
  pos4: number = 0;
  undoX: string;
  undoY: string;
  undoComponent: HTMLImageElement;

  //@ViewChild("myCanvas") myCanvas;
  @ViewChild("exitImg") exitImg;
  @ViewChild("gwcImg") gwcImg;
  @ViewChild("rwcImg") rwcImg;

  ngOnInit() {



  }

  onMouseDown(e: MouseEvent) {

    this.selectedToDrag = true;

    this.pos3 = e.clientX;
    this.pos4 = e.clientY;

  }

  onMouseMove(e: MouseEvent) {

    e.preventDefault();
    if (this.selectedToDrag) {

      let circuit: HTMLImageElement = e.currentTarget as HTMLImageElement;

      // calculate the new cursor position:
      this.undoComponent = circuit;
      this.undoX = circuit.style.top;
      this.undoY = circuit.style.left;
      this.pos1 = this.pos3 - e.clientX;
      this.pos2 = this.pos4 - e.clientY;
      this.pos3 = e.clientX;
      this.pos4 = e.clientY;
      // set the element's new position:
      circuit.style.top = (circuit.offsetTop - this.pos2) + "px";
      circuit.style.left = (circuit.offsetLeft - this.pos1) + "px";
    }
  }

  onMouseUp(e: MouseEvent) {
    e.preventDefault();
    this.selectedToDrag = false;
  }


  onTouchStart(e: TouchEvent) {

    this.selectedToDrag = true;

    this.pos3 = e.touches[e.touches.length - 1].clientX;
    this.pos4 = e.touches[e.touches.length - 1].clientY;

  }

  onTouchMove(e: TouchEvent) {

    e.preventDefault();
    if (this.selectedToDrag) {

      let circuit: HTMLImageElement = e.currentTarget as HTMLImageElement;

      // undo the last action
      this.undoComponent = circuit;
      this.undoX = circuit.style.top;
      this.undoY = circuit.style.left;

      this.pos1 = this.pos3 - e.touches[e.touches.length - 1].clientX;
      this.pos2 = this.pos4 - e.touches[e.touches.length - 1].clientY;
      this.pos3 = e.touches[e.touches.length - 1].clientX;
      this.pos4 = e.touches[e.touches.length - 1].clientY;
      // set the element's new position:
      circuit.style.top = (circuit.offsetTop - this.pos2) + "px";
      circuit.style.left = (circuit.offsetLeft - this.pos1) + "px";
    }
  }

  onTouchEnd(e: TouchEvent) {
    e.preventDefault();
    this.selectedToDrag = false;
  }


  undoRecentAction() {
    this.undoComponent.style.top = this.undoX;
    this.undoComponent.style.left = this.undoY;
  }


}
