import { ReversePipe } from './reverse.component';
import { PlayerDataService } from './player-data.service';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
  ],
  declarations: [ 
    AppComponent,
    ReversePipe,
  ],
  providers:    [ PlayerDataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
