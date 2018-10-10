import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule,MatIconModule,MatSidenavModule,MatButtonToggleModule,MatCardModule,MatGridListModule,MatFormFieldModule,MatInputModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ FormsModule, ReactiveFormsModule,MatButtonModule, MatToolbarModule,MatIconModule,MatSidenavModule,MatButtonToggleModule,MatCardModule,MatGridListModule,MatFormFieldModule,MatInputModule],
  exports: [ FormsModule, ReactiveFormsModule,MatButtonModule, MatToolbarModule,MatIconModule,MatSidenavModule,MatButtonToggleModule,MatCardModule,MatGridListModule,MatFormFieldModule,MatInputModule],
})
export class MaterialModule { }