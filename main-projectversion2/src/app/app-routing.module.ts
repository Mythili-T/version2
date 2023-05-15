import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomepageComponent } from './Homepage/Homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './Registerpage/Registerpage.component';
import { VideosComponent } from './videos/videos.component';
import { TimetableComponent } from './timetable/timetable.component';
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
import { QuestionpaperComponent } from './questionpaperall/questionpaper/questionpaper.component';
import { SyllabusComponent } from './syllabusall/syllabus/syllabus.component';
import { EcefirstComponent } from './notes/ecefirst/ecefirst.component';
import { EcesecondComponent } from './notes/ecesecond/ecesecond.component';
import { EcethirdComponent } from './notes/ecethird/ecethird.component';
import { EcefinalComponent } from './notes/ecefinal/ecefinal.component';
import { EeefirstComponent } from './notes/eeefirst/eeefirst.component';
import { EeesecondComponent } from './notes/eeesecond/eeesecond.component';
import { EeethirdComponent } from './notes/eeethird/eeethird.component';
import { EeefinalComponent } from './notes/eeefinal/eeefinal.component';
import { ITfirstComponent } from './notes/ITfirst/ITfirst.component';
import { ITsecondComponent } from './notes/ITsecond/ITsecond.component';
import { ITthirdComponent } from './notes/ITthird/ITthird.component';
import { ITfinalComponent } from './notes/ITfinal/ITfinal.component';
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



const routes: Routes = [
  {
    path: "home",
    component: HomepageComponent
  },

  {
    path: "login",
    component: LoginpageComponent
  },
  {
    path: "register",
    component: RegisterpageComponent
  },
  {
    path: "about-us",
    component: AboutUsComponent
  },
  {
    path: "contact-us",
    component: ContactUsComponent,
    canActivate:[SMMSGuard]
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent
  },
  {
    path: "CSE-Firstsub",
    component: CSEFirstsubComponent,
  },
  {
    path: "CSE-Secondsub",
    component: CSESecondsubComponent
  },
  {
    path: "CSE-Thirdsub",
    component: CSEThirdsubComponent
  },
  {
    path: "CSE-Finalsub",
    component: CSEFinalsubComponent
  },
  {
    path: "ECE-Firstsub",
    component: ECEFirstsubComponent
  },
  {
    path: "ECE-Secondsub",
    component: ECESecondsubComponent
  },
  {
    path: "ECE-Thirdsub",
    component: ECEThirdsubComponent
  },
  {
    path: "ECE-Finalsub",
    component: ECEFinalsubComponent
  },
  {
    path:"EEE-Firstsub",
    component:EEEFirstsubComponent
  },
  {
    path:"EEE-Secondsub",
    component:EEESecondsubComponent
  },
  {
    path:"EEE-Thirdsub",
    component:EEEThirdsubComponent
  },
  {
    path:"EEE-Finalsub",
    component:EEEFinalsubComponent
  },
  {
    path:"IT-Firstsub",
    component:ITFirstSubComponent
  },
  {
    path:"IT-Secondsub",
    component:ITSecondsubComponent
  },
  {
    path:"IT-Thirdsub",
    component:ITThirdsubComponent
  },
  {
    path:"IT-Finalsub",
    component:ITFinalsubComponent
  },
  {
    path:"videos",
    component:VideosComponent
  },

  {
    path:"timetable",
  component:TimetableComponent,
  canActivate:[SMMSGuard]
  },
  {
    path:"questionpaper",
  component:QuestionpaperComponent
  },
  {
    path:"syllabus",
    component:SyllabusComponent
  },
  {
    path:"lab",
    component:LabComponent,
  },
  {
    path:"ecelab",
    component:EceLabComponent,
  },
  {
    path:"eeelab",
    component:EeeLabComponent
  },
  {
    path:"Itlab",
    component:ItLabComponent,

  },
  {
    path:"labdepartment",
    component:LabdepartmentComponent,
    canActivate:[SMMSGuard]
  },
  {
    path:"department",
    component:DepartmentComponent,
    canActivate:[SMMSGuard],
  },
  {
  path:"CSE",
  component:CSEComponent
},
{
  path:"ECE",
  component:ECEComponent
},
{
  path:"EEE",
  component:EEEComponent
},
{
  path:"IT",
  component:ITComponent
},
{
  path:"CSEfirstnotes",
  component:NotesPageComponent
},
{
  path:"csesecondnotes",
  component:CSEsecondComponent
},
{
  path:"csethirdnotes",
  component:CSEthirdComponent
},
{
  path:"csefinalnotes",
  component:CSEfinalComponent
},
{
  path:"ecefirstnotes",
  component:EcefirstComponent
},
{
  path:"ecesecondnotes",
  component:EcesecondComponent
},
{
  path:"ecethirdnotes",
  component:EcethirdComponent
},
{
  path:"ecefinalnotes",
  component:EcefinalComponent
},
{
  path:"eeefirstnotes",
  component:EeefirstComponent
},
{
  path:"eeesecondnotes",
  component:EeesecondComponent
},
{
  path:"eeethirdnotes",
  component:EeethirdComponent
},
{
  path:"eeefinalnotes",
  component:EeefinalComponent
},
{
  path:"ITfirstnotes",
  component:ITfirstComponent
},
{
  path:"ITsecondnotes",
  component:ITsecondComponent
},
{
  path:"ITthirdnotes",
  component:ITthirdComponent
},
{
  path:"ITfinalnotes",
  component:ITfinalComponent
},
{
  path:"cseqpsecond",
  component:CseqpsecondComponent
},
{
  path:"cseqpthird",
  component:CseqpthirdComponent
},
{
  path:"cseqpfinal",
  component:CseqpfinalComponent
},
{
  path:"eceqpfirst",
  component:EceqpfirstComponent
},
{
  path:"eceqpsecond",
  component:EceqpsecondComponent
},
{
  path:"eceqpthird",
  component:EceqpthirdComponent
},
{
  path:"eceqpfinal",
  component:EceqpfinalComponent
},
{
  path:"eeeqpfirst",
  component:EeeqpfirstComponent
},
{
  path:"eeeqpsecond",
  component:EeeqpsecondComponent
},
{
  path:"eeeqpthird",
  component:EeeqpthirdComponent
},
{
  path:"eeeqpfinal",
  component:EeeqpfinalComponent
},
{
  path:"ITqpfirst",
  component:ITqpfirstComponent
},
{
  path:"ITqpsecond",
  component:ITqpsecondComponent
},
{
  path:"ITqpthird",
  component:ITqpthirdComponent
},
{
  path:"ITqpfinal",
  component:ITqpfinalComponent
},
{
  path:"csesecondsybl",
  component:CsesecondsyblComponent
},
{
  path:"csethirdsybl",
  component:CsethirdsyblComponent
},
{
  path:"csefinalsybl",
  component:CsefinalsyblComponent
},
{
  path:"ecefirstsybl",
  component:EcefirstsyblComponent
},
{
  path:"ecesecondsybl",
  component:EcesecondsyblComponent
},
{
  path:"ecethirdsybl",
  component:EcethirdsyblComponent
},
{
  path:"ecefinalsybl",
  component:EcefinalsyblComponent
},
{
  path:"eeefirstsybl",
  component:EeefirstsyblComponent
},
{
  path:"eeesecondsybl",
  component:EeesecondsyblComponent
},
{
  path:"eeethirdsybl",
  component:EeethirdsyblComponent
},
{
  path:"eeefinalsybl",
  component:EeefinalsyblComponent
},
{
  path:"ITfirstsybl",
  component:ITfirstsyblComponent
},
{
  path:"ITsecondsybl",
  component:ITsecondsyblComponent
},
{
  path:"ITthirdsybl",
  component:ITthirdsyblComponent
},
{
  path:"ITfinalsybl",
  component:ITfinalsyblComponent
},
{
  path: "",
  component: HomepageComponent
},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
