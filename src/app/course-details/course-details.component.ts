import { Component, Input, input } from '@angular/core';
import { ICourse } from '../app.component.models';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent {
  course!: ICourse;
  index: number = 1;
  // should be the same name in router
  // and use withComponentInputBinding in app.Config
  // don't make bind for changes
  @Input() id: string = '';
  constructor(private activatedRoute: ActivatedRoute, private router: Router){}

// Note:
// 1- Not recommend it
// 2- Not detect the changes of the route
  ngOnInit() {
  // first static way
  const id = this.activatedRoute.snapshot.params['id'];
  console.log('snapshot params', id);

  // second static way
  const courseId = this.activatedRoute.snapshot.paramMap.get('id');
  console.log('snapshot paramMap', courseId);

  this.activatedRoute.params.subscribe((res: Params) => {
    console.log('params ', res['id']);
  })

  this.activatedRoute.paramMap.subscribe((res: ParamMap) => {
    console.log('paramMap ', res.get('id'));
  })

  console.log('id', this.id);
  }

  getNext(){
    this.router.navigate([`course-list`,this.index++]);
  }
}
