import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {


  data;
  loading = false;
  total = 0;
  page = 1;
  limit = 20;
  constructor(private http: HttpClient) {
    this.total = 100;
  }
  getMessages() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      console.log(data);
      this.data = data;
      this.total = this.data.length;
    });
  }
  goToPage(n: number): void {
    this.page = n;
    alert('haha' + n + '1' );
    this.getMessages();
  }

  onNext(): void {
    this.page++;
    this.getMessages();
  }

  onPrev(): void {
    this.page--;
    this.getMessages();
  }
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      console.log(data);
      this.data = data;
      this.total = this.data.length;
    });
  }
}
