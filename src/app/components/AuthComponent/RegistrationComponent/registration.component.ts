import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { User } from "../../../../models/index";
import { NgForm  } from "@angular/forms";
import { UserService} from '../../../services/user.service';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef,private userService:UserService,private http:HttpClient) {}
  file:File ;
  user:User = new User();


  ngOnInit() {}
  onSubmit(form) {
    this.userService.saveUser( this.user , this.file ).subscribe(result=>{
      alert("user created successfully")
    },error=>{
      console.log(error,"error")
    });

  }

  onFileChange( event ) {
    let imageFile=event.target.files[0];
    let reader = new FileReader();
    if(this.checkImageType){
      reader.onload=(e:any)=>{
        console.log(e,"e onload")
       this.user.imagePath = e.target.result
      };
      reader.readAsDataURL( event.target.files[0] );
      this.file = imageFile;
    }
  }

  

  checkImageType(ext) {
    let flag = false;
    const fileType = ["jpeg", "jpg", "png"];
    for (let i = 0; i < fileType.length; i++) {
      if (fileType[i] == ext.toLowerCase()) {
        flag = true;
        break;
      } else {
        flag = false;
      }
    }
    return flag;
  }
}
