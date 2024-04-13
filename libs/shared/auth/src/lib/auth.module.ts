import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataService } from './services/user-data.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [UserDataService],
})
export class AuthModule {}
