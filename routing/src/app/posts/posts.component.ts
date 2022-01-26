import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { PostsService } from "../posts.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
  showId: boolean = false;
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.showId = !!params.showId;
    });
  }
  showIdProgram() {
    this.router.navigate(["/posts"], {
      queryParams: {
        showId: true,
      },
    });
  }
}
