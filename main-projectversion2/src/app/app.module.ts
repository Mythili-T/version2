import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Homepage/Homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './Registerpage/Registerpage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LabComponent } from './lab/lab.component';
import { SMMSGuard } from './smms.guard';
import { MaterialGuard } from './guard/material.guard';
import { DepartmentComponent } from './department/department.component';
import { CSEComponent } from './dept/cse/cse.component';
import { ECEComponent } from './dept/ece/ece.component';
import { EEEComponent } from './dept/eee/eee.component';
import { ITComponent } from './dept/it/it.component';
import { NotesPageComponent } from './notes/Notes-page/Notes-page.component';
import { CSEsecondComponent } from './notes/csesecond/csesecond.component';
import { CSEthirdComponent } from './notes/csethird/csethird.component';
import { CSEfinalComponent } from './notes/csefinal/csefinal.component';
import { CSEFirstsubComponent } from './subjects/CSE-Firstsub/CSE-Firstsub.component';
import { CSESecondsubComponent } from './subjects/CSE-Secondsub/CSE-Secondsub.component';
import { CSEThirdsubComponent } from './subjects/CSE-Thirdsub/CSE-Thirdsub.component';
import { CSEFinalsubComponent } from './subjects/CSE-Finalsub/CSE-Finalsub.component';
import { ECEFirstsubComponent } from './subjects/ECE-Firstsub/ECE-Firstsub.component';
import { ECESecondsubComponent } from './subjects/ECE-Secondsub/ECE-Secondsub.component';
import { ECEThirdsubComponent } from './subjects/ECE-Thirdsub/ECE-Thirdsub.component';
import { ECEFinalsubComponent } from './subjects/ECE-Finalsub/ECE-Finalsub.component';
import { EEEFirstsubComponent } from './subjects/EEE-Firstsub/EEE-Firstsub.component';
import { EEESecondsubComponent } from './subjects/EEE-Secondsub/EEE-Secondsub.component';
import { EEEThirdsubComponent } from './subjects/EEE-Thirdsub/EEE-Thirdsub.component';
import { EEEFinalsubComponent } from './subjects/EEE-Finalsub/EEE-Finalsub.component';
import { ITFirstSubComponent } from './subjects/IT-FirstSub/IT-FirstSub.component';
import { ITSecondsubComponent } from './subjects/IT-Secondsub/IT-Secondsub.component';
import { ITThirdsubComponent } from './subjects/IT-Thirdsub/IT-Thirdsub.component';
import { ITFinalsubComponent } from './subjects/IT-Finalsub/IT-Finalsub.component';
import { VideosComponent } from './videos/videos.component';
import { TimetableComponent } from './timetable/timetable.component';
import { QuestionpaperComponent } from './questionpaperall/questionpaper/questionpaper.component';
import { SyllabusComponent } from './syllabusall/syllabus/syllabus.component';
import { EcefinalComponent } from './notes/ecefinal/ecefinal.component';
import { EcefirstComponent } from './notes/ecefirst/ecefirst.component';
import { EcethirdComponent } from './notes/ecethird/ecethird.component';
import { EeefirstComponent } from './notes/eeefirst/eeefirst.component';
import { EeesecondComponent } from './notes/eeesecond/eeesecond.component';
import { EeethirdComponent } from './notes/eeethird/eeethird.component';
import { EeefinalComponent } from './notes/eeefinal/eeefinal.component';
import { ITfirstComponent } from './notes/ITfirst/ITfirst.component';
import { ITfinalComponent } from './notes/ITfinal/ITfinal.component';
import { ITsecondComponent } from './notes/ITsecond/ITsecond.component';
import { CseqpsecondComponent } from './questionpaperall/cseqpsecond/cseqpsecond.component';
import { CseqpthirdComponent } from './questionpaperall/cseqpthird/cseqpthird.component';
import { CseqpfinalComponent } from './questionpaperall/cseqpfinal/cseqpfinal.component';
import { EceqpfirstComponent } from './questionpaperall/eceqpfirst/eceqpfirst.component';
import { EceqpsecondComponent } from './questionpaperall/eceqpsecond/eceqpsecond.component';
import { EceqpthirdComponent } from './questionpaperall/eceqpthird/eceqpthird.component';
import { EceqpfinalComponent } from './questionpaperall/eceqpfinal/eceqpfinal.component';
import { EeeqpfirstComponent } from './questionpaperall/eeeqpfirst/eeeqpfirst.component';
import { EeeqpsecondComponent } from './questionpaperall/eeeqpsecond/eeeqpsecond.component';
import { EeeqpthirdComponent } from './questionpaperall/eeeqpthird/eeeqpthird.component';
import { EeeqpfinalComponent } from './questionpaperall/eeeqpfinal/eeeqpfinal.component';
import { ITqpfirstComponent } from './questionpaperall/ITqpfirst/ITqpfirst.component';
import { ITqpsecondComponent } from './questionpaperall/ITqpsecond/ITqpsecond.component';
import { ITqpthirdComponent } from './questionpaperall/ITqpthird/ITqpthird.component';
import { ITqpfinalComponent } from './questionpaperall/ITqpfinal/ITqpfinal.component';
import { CsesecondsyblComponent } from './syllabusall/csesecondsybl/csesecondsybl.component';
import { CsethirdsyblComponent } from './syllabusall/csethirdsybl/csethirdsybl.component';
import { CsefinalsyblComponent } from './syllabusall/csefinalsybl/csefinalsybl.component';
import { EcefirstsyblComponent } from './syllabusall/ecefirstsybl/ecefirstsybl.component';
import { EcesecondsyblComponent } from './syllabusall/ecesecondsybl/ecesecondsybl.component';
import { EcethirdsyblComponent } from './syllabusall/ecethirdsybl/ecethirdsybl.component';
import { EcefinalsyblComponent } from './syllabusall/ecefinalsybl/ecefinalsybl.component';
import { EeefirstsyblComponent } from './syllabusall/eeefirstsybl/eeefirstsybl.component';
import { EeesecondsyblComponent } from './syllabusall/eeesecondsybl/eeesecondsybl.component';
import { EeethirdsyblComponent } from './syllabusall/eeethirdsybl/eeethirdsybl.component';
import { EeefinalsyblComponent } from './syllabusall/eeefinalsybl/eeefinalsybl.component';
import { ITfirstsyblComponent } from './syllabusall/ITfirstsybl/ITfirstsybl.component';
import { ITsecondsyblComponent } from './syllabusall/ITsecondsybl/ITsecondsybl.component';
import { ITthirdsyblComponent } from './syllabusall/ITthirdsybl/ITthirdsybl.component';
import { ITfinalsyblComponent } from './syllabusall/ITfinalsybl/ITfinalsybl.component';
import { EceLabComponent } from './lab/ece-lab/ece-lab.component';
import { EeeLabComponent } from './lab/eee-lab/eee-lab.component';
import { ItLabComponent } from './lab/It-lab/It-lab.component';
import { LabdepartmentComponent } from './lab/labdepartment/labdepartment.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuard } from './auth.guard';
import { HomelogoutComponent } from './homelogout/homelogout.component';

@NgModule({
  declarations: [	
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    RegisterpageComponent,
    AboutUsComponent,
    ContactUsComponent,
    ForgotPasswordComponent,
    CSEFirstsubComponent,
    CSESecondsubComponent,
    CSEThirdsubComponent,
    CSEFinalsubComponent,
    CSEsecondComponent,
    CSEthirdComponent,
    CSEfinalComponent,
    NotesPageComponent,
    ECEFirstsubComponent,
    ECESecondsubComponent,
    ECEThirdsubComponent,
    ECEFinalsubComponent,
    EEEFirstsubComponent,
    EEESecondsubComponent,
    EEEThirdsubComponent,
    EEEFinalsubComponent,
    ITFirstSubComponent,
    ITSecondsubComponent,
    ITThirdsubComponent,
    ITFinalsubComponent,
    VideosComponent,
    TimetableComponent,
    DepartmentComponent,
    CSEComponent,
    ECEComponent,
    EEEComponent,
    ITComponent,
    QuestionpaperComponent,
    SyllabusComponent,
    LabComponent,
    ForgotPasswordComponent,
    LoginpageComponent,
    RegisterpageComponent,
    EcefinalComponent,
    EcefirstComponent,
    EcethirdComponent,
    EcefirstComponent,
    EeefirstComponent,
    EeesecondComponent,
    EeethirdComponent,
    EeefinalComponent,
    ITfirstComponent,
    ITfinalComponent,
    ITThirdsubComponent,
    ITsecondComponent,
    CseqpsecondComponent,
    CseqpthirdComponent,
    CseqpfinalComponent,
    EceqpfirstComponent,
    EceqpsecondComponent,
    EceqpthirdComponent,
    EceqpfinalComponent,
    EeeqpfirstComponent,
    EeeqpsecondComponent,
    EeeqpthirdComponent,
    EeeqpfinalComponent,
    ITqpfirstComponent,
    ITqpsecondComponent,
    ITqpthirdComponent,
    ITqpfinalComponent,
    CsesecondsyblComponent,
    CsethirdsyblComponent,
    CsefinalsyblComponent,
    EcefirstsyblComponent,
    EcesecondsyblComponent,
    EcethirdsyblComponent,
    EcefinalsyblComponent,
    EeefirstsyblComponent,
    EeesecondsyblComponent,
    EeethirdsyblComponent,
    EeefinalsyblComponent,
    ITfirstsyblComponent,
    ITsecondsyblComponent,
    ITthirdsyblComponent,
    ITfinalsyblComponent,
    EceLabComponent,
    EeeLabComponent,
    ItLabComponent,
    LabdepartmentComponent,
      HomelogoutComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    ReactiveFormsModule,HttpClientModule,
  ],
  providers: [SMMSGuard,MaterialGuard,AuthGuard,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
