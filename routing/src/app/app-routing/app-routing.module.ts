import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { HomeComponent } from "../home/home.component";
import { PostsComponent } from "../posts/posts.component";
import { PostComponent } from "../post/post.component";
import { AboutExtraComponent } from "../about-extra/about-extra.component";
import { ErrorComponent } from "../error/error.component";
import { AuthGuard } from "../auth.guard";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "about",
    component: AboutComponent,
    canActivateChild: [AuthGuard],
    children: [{ path: "extra", component: AboutExtraComponent }],
  },
  { path: "posts", component: PostsComponent, canActivate: [AuthGuard] },
  { path: "posts/:id", component: PostComponent },
  { path: "**", component: ErrorComponent },
  { path: "**", redirectTo: "/error" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
