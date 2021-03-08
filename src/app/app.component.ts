import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public configureAlertMessage : Boolean = false;
  src = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  pagechanging($event) {
    if(this.configureAlertMessage)
      alert("PageNumber->" + $event.pageNumber);
  }

  configureAlert($event) {
    this.configureAlertMessage = true;
  }

  cancelConfigureAlert($event) {
    this.configureAlertMessage = false;
  }
}

