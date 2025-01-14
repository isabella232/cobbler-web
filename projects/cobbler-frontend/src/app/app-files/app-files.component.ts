import {Component} from '@angular/core';
import {FilesService} from '../services/files.service';


@Component({
  selector: 'app-app-files',
  templateUrl: './app-files.component.html',
  styleUrls: ['./app-files.component.css']
})
export class AppFilesComponent {
  data = [];

  constructor(service: FilesService) {
    this.data = service.getAll();
  }

}
