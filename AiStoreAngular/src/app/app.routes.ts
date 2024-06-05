import { Routes } from '@angular/router';
// import { accessGuardGuard } from './guards/access-guard.guard';
import { accessGuardGuard } from './services/guards/access-guard.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from './publicPages/home/home.component';
import { SignINComponent } from './sign_in&up/sign-in/sign-in.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'signin',component:SignINComponent},
    {path:'register',loadComponent:()=>import("../app/sign_in&up/sign-up/sign-up.component").then(c=>c.SignUpComponent)},
    {path:'About',loadComponent:()=>import("../app/publicPages/about/about.component").then(c=>c.AboutComponent)},
    {path:'Blog',loadComponent:()=>import("../app/publicPages/blog/blog.component").then(c=>c.BlogComponent)},
    {path:'contactUs',loadComponent:()=>import("../app/publicPages/contact-us/contact-us.component").then(c=>c.ContactUsComponent)},
    {path:'dashboard',loadComponent:()=>import("../app/userDashboard/dashboard/dashboard.component").then(c => c.DashboardComponent),canActivate:[accessGuardGuard]},
    {path:'marketMood',loadComponent:()=>import("../app/userDashboard/market-mood/market-mood.component").then(c => c.MarketMoodComponent),canActivate:[accessGuardGuard]},
    {path:'runningTrade',loadComponent:()=>import("../app/userDashboard/running-trade/running-trade.component").then(c => c.RunningTradeComponent),canActivate:[accessGuardGuard]},
    {path:'IPC_Section',loadComponent:()=>import("../app/userDashboard/ipc-section/ipc-section.component").then(c => c.IpcSectionComponent),canActivate:[accessGuardGuard]},
    {path:'Amazon_Analysis',loadComponent:()=>import("../app/userDashboard/amazon-analysis/amazon-analysis.component").then(c => c.AmazonAnalysisComponent),canActivate:[accessGuardGuard]},
    {path:'GenieBot',loadComponent:()=>import("../app/userDashboard/paper-config/paper-config.component").then(c => c.PaperConfigComponent)},
    {path:'GeminiBot',loadComponent:()=>import("../app/userDashboard/market-mood/market-mood.component").then(c => c.MarketMoodComponent),canActivate:[accessGuardGuard]},
    {path:'GeminiDataBot',loadComponent:()=>import("../app/userDashboard/chatbot-data-gemini/chatbot-data-gemini.component").then(c => c.ChatbotDataGeminiComponent),canActivate:[accessGuardGuard]},
    {path:'GeminiImageBot',loadComponent:()=>import("../app/userDashboard/chatbot-image-gemini/chatbot-image-gemini.component").then(c => c.ChatbotImageGeminiComponent),canActivate:[accessGuardGuard]},
    {path:'AskPDf',loadComponent:()=>import("../app/userDashboard/running-trade/running-trade.component").then(c => c.RunningTradeComponent),canActivate:[accessGuardGuard]},
    {path:'Subscription',loadComponent:()=>import("../app/userDashboard/closed-trade/closed-trade.component").then(c => c.ClosedTradeComponent),canActivate:[accessGuardGuard]},
    {path:'**',redirectTo:'home',pathMatch:'full'},
];
