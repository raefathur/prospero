import React from 'react';

import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './i18n';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';


import Home from './pages/Home';

import AboutProspero from './components/AboutProspero';

import ProsperoTeams
    from './components/ProsperoTeams';

import Director
    from './components/Director';

import Contact
    from './components/Contact';

import StrategicPlan
    from './components/StrategicPlan';

import DiagnosingEmployeePerformanceManagementEffectiveness
    from './components/DiagnosingEmployeePerformanceManagementEffectiveness';

import StrategyMapKPI
    from './components/StrategyMapKPI';

import CompetencyBasedHRM
    from './components/CompetencyBasedHRM';

import HRForNonHR
    from './components/HRForNonHR';

import HumanResourceManagementEssentials
    from './components/HumanResourceManagementEssentials';

import TalentManagement
    from './components/TalentManagement';

import DevelopingStandardOperationProcedure
    from './components/DevelopingStandardOperationProcedure';

import OrganizationalDevelopment
    from './components/OrganizationalDevelopment';

import CoachingCounseling
    from './components/CoachingCounseling';

import EffectiveLeadership
    from './components/EffectiveLeadership';

import SupervisoryDevelopmentProgram
    from './components/SupervisoryDevelopmentProgram';

import DevelopingCustomerFocusedTeams
    from './components/DevelopingCustomerFocusedTeams';

import DevelopingExecutionSkills
    from './components/DevelopingExecutionSkills';

import FiveSWorkplace
    from './components/FiveSWorkplace';

import HighImpactPresentationSkill
    from './components/HighImpactPresentationSkill';

import CommunicationSkill
    from './components/CommunicationSkill';

import BusinessManagementResearch
    from './components/BusinessManagementResearch';

import ImprovingProjectManagementSkill
    from './components/ImprovingProjectManagementSkill';

import FundamentalOfMarketing
    from './components/FundamentalOfMarketing';

import ProblemSolvingDecisionMaking
    from './components/ProblemSolvingDecisionMaking';

import NegotiationSkillForBusiness
    from './components/NegotiationSkillForBusiness';

import FeasibilityStudy
    from './components/FeasibilityStudy';

import BusinessPlan
    from './components/BusinessPlan';

import FinanceForNonFinance
    from './components/FinanceForNonFinance';

import DevelopingTrainingModule
    from './components/DevelopingTrainingModule';

import DesigningTrainingProgram
    from './components/DesigningTrainingProgram';

import TrainingPlanDevelopment
    from './components/TrainingPlanDevelopment';

import TrainingImpactEvaluation
    from './components/TrainingImpactEvaluation';

import TrainingManagementSystem
    from './components/TrainingManagementSystem';

import TrainingForTheTrainers
    from './components/TrainingForTheTrainers';

import TimeStressManagement
    from './components/TimeStressManagement';

import PersonalDevelopment
    from './components/PersonalDevelopment';

import WorkLifeBalance
    from './components/WorkLifeBalance';

import EffectiveFollowership
    from './components/EffectiveFollowership';

import PersiapanPensiun1Day
    from './components/PersiapanPensiun1Day';

import PersiapanPensiun2Day
    from './components/PersiapanPensiun2Day';

import PersiapanPensiun3Day
    from './components/PersiapanPensiun3Day';

import SmartMoneyManagement
    from './components/SmartMoneyManagement';

import WorkSmarterWithArtificialIntelligence
    from './components/WorkSmarterWithArtificialIntelligence';

import HighImpactLeaderManager
    from './components/HighImpactLeaderManager';

import HappyRetirement
    from './components/HappyRetirement';    

function App() {
    return (
        <BrowserRouter>

            <div className="relative min-h-screen">

                {/* BACKGROUND UTAMA */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: `
                            linear-gradient(
                                110deg,
                                #ffffff 0%,
                                #ffffff 35%,
                                #f7fdfe 50%,
                                #edfafd 65%,
                                #e5f8fa 82%,
                                #e5f8f2 100%
                            )
                        `,
                    }}
                ></div>


                {/* SEMUA ISI WEBSITE */}
                <div className="relative z-10">

                    <Navbar />


                    <Routes>

                        {/* HALAMAN BERANDA */}
                        <Route
                            path="/"
                            element={<Home />}
                        />


                        {/* HALAMAN ABOUT */}
                        <Route
                            path="/about"
                            element={<AboutProspero />}
                        />


                        {/* HALAMAN PROSPERO TEAMS */}
                        <Route
                            path="/prospero-teams"
                            element={<ProsperoTeams />}
                        />


                        {/* HALAMAN DIRECTOR */}
                        <Route
                            path="/director"
                            element={<Director />}
                        />


                        {/* HALAMAN HUBUNGI KAMI */}
                        <Route
                            path="/contact"
                            element={<Contact />}
                        />


                        {/* HALAMAN STRATEGIC PLAN */}
                        <Route
                            path="/services/strategic-plan"
                            element={<StrategicPlan />}
                        />


                        {/* HALAMAN DIAGNOSING EMPLOYEE PERFORMANCE MANAGEMENT EFFECTIVENESS */}
                        <Route
                            path="/services/diagnosing-employee-performance-management-effectiveness"
                            element={
                                <DiagnosingEmployeePerformanceManagementEffectiveness />
                            }
                        />


                        {/* HALAMAN PENYUSUNAN STRATEGY MAP & KPI BERBASIS BSC */}
                        <Route
                            path="/services/strategy-map-kpi-bsc"
                            element={<StrategyMapKPI />}
                        />


                        {/* HALAMAN COMPETENCY-BASED HRM */}
                        <Route
                            path="/services/competency-based-hrm"
                            element={<CompetencyBasedHRM />}
                        />


                        {/* HALAMAN HR FOR NON HR */}
                        <Route
                            path="/services/hr-for-non-hr"
                            element={<HRForNonHR />}
                        />


                        {/* HALAMAN HUMAN RESOURCE MANAGEMENT ESSENTIALS */}
                        <Route
                            path="/services/human-resource-management-essentials"
                            element={<HumanResourceManagementEssentials />}
                        />


                        {/* HALAMAN TALENT MANAGEMENT */}
                        <Route
                            path="/services/talent-management"
                            element={<TalentManagement />}
                        />


                        {/* HALAMAN DEVELOPING STANDARD OPERATION PROCEDURE */}
                        <Route
                            path="/services/developing-standard-operation-procedure"
                            element={
                                <DevelopingStandardOperationProcedure />
                            }
                        />


                        {/* HALAMAN ORGANIZATIONAL DEVELOPMENT */}
                        <Route
                            path="/services/organizational-development"
                            element={<OrganizationalDevelopment />}
                        />


                        {/* HALAMAN COACHING & COUNSELING */}
                        <Route
                            path="/services/coaching-counseling"
                            element={<CoachingCounseling />}
                        />


                        {/* HALAMAN EFFECTIVE LEADERSHIP */}
                        <Route
                            path="/services/effective-leadership"
                            element={<EffectiveLeadership />}
                        />


                        {/* HALAMAN SUPERVISORY DEVELOPMENT PROGRAM */}
                        <Route
                            path="/services/supervisory-development-program"
                            element={<SupervisoryDevelopmentProgram />}
                        />


                        {/* HALAMAN DEVELOPING CUSTOMER-FOCUSED TEAMS */}
                        <Route
                            path="/services/developing-customer-focused-teams"
                            element={<DevelopingCustomerFocusedTeams />}
                        />


                        {/* HALAMAN DEVELOPING EXECUTION SKILLS */}
                        <Route
                            path="/services/developing-execution-skills"
                            element={<DevelopingExecutionSkills />}
                        />


                        {/* HALAMAN 5S WORKPLACE */}
                        <Route
                            path="/services/5s-workplace"
                            element={<FiveSWorkplace />}
                        />


                        {/* HALAMAN HIGH IMPACT PRESENTATION SKILL */}
                        <Route
                            path="/services/high-impact-presentation-skill"
                            element={<HighImpactPresentationSkill />}
                        />


                        {/* HALAMAN COMMUNICATION SKILL */}
                        <Route
                            path="/services/communication-skill"
                            element={<CommunicationSkill />}
                        />


                        {/* HALAMAN BUSINESS MANAGEMENT RESEARCH */}
                        <Route
                            path="/services/business-management-research"
                            element={<BusinessManagementResearch />}
                        />


                        {/* HALAMAN IMPROVING PROJECT MANAGEMENT SKILL */}
                        <Route
                            path="/services/improving-project-management-skill"
                            element={<ImprovingProjectManagementSkill />}
                        />


                        {/* HALAMAN FUNDAMENTAL OF MARKETING */}
                        <Route
                            path="/services/fundamental-of-marketing"
                            element={<FundamentalOfMarketing />}
                        />


                        {/* HALAMAN PROBLEM SOLVING & DECISION MAKING */}
                        <Route
                            path="/services/problem-solving-decision-making"
                            element={<ProblemSolvingDecisionMaking />}
                        />


                        {/* HALAMAN NEGOTIATION SKILL FOR BUSINESS */}
                        <Route
                            path="/services/negotiation-skill-for-business"
                            element={<NegotiationSkillForBusiness />}
                        />


                        {/* HALAMAN FEASIBILITY STUDY */}
                        <Route
                            path="/services/feasibility-study"
                            element={<FeasibilityStudy />}
                        />


                        {/* HALAMAN BUSINESS PLAN */}
                        <Route
                            path="/services/business-plan"
                            element={<BusinessPlan />}
                        />


                        {/* HALAMAN FINANCE FOR NON FINANCE */}
                        <Route
                            path="/services/finance-for-non-finance"
                            element={<FinanceForNonFinance />}
                        />


                        {/* HALAMAN DEVELOPING TRAINING MODULE */}
                        <Route
                            path="/services/developing-training-module"
                            element={<DevelopingTrainingModule />}
                        />


                        {/* HALAMAN DESIGNING TRAINING PROGRAM */}
                        <Route
                            path="/services/designing-training-program"
                            element={<DesigningTrainingProgram />}
                        />


                        {/* HALAMAN TRAINING PLAN DEVELOPMENT */}
                        <Route
                            path="/services/training-plan-development"
                            element={<TrainingPlanDevelopment />}
                        />


                        {/* HALAMAN TRAINING IMPACT EVALUATION */}
                        <Route
                            path="/services/training-impact-evaluation"
                            element={<TrainingImpactEvaluation />}
                        />


                        {/* HALAMAN TRAINING MANAGEMENT SYSTEM */}
                        <Route
                            path="/services/training-management-system"
                            element={<TrainingManagementSystem />}
                        />


                        {/* HALAMAN TRAINING FOR THE TRAINERS */}
                        <Route
                            path="/services/training-for-the-trainers"
                            element={<TrainingForTheTrainers />}
                        />


                        {/* HALAMAN TIME & STRESS MANAGEMENT */}
                        <Route
                            path="/services/time-stress-management"
                            element={<TimeStressManagement />}
                        />


                        {/* HALAMAN PERSONAL DEVELOPMENT */}
                        <Route
                            path="/services/personal-development"
                            element={<PersonalDevelopment />}
                        />


                        {/* HALAMAN WORK LIFE BALANCE */}
                        <Route
                            path="/services/work-life-balance"
                            element={<WorkLifeBalance />}
                        />


                        {/* HALAMAN EFFECTIVE FOLLOWERSHIP */}
                        <Route
                            path="/services/effective-followership"
                            element={<EffectiveFollowership />}
                        />


                        {/* HALAMAN PERSIAPAN PENSIUN (1 DAY) */}
                        <Route
                            path="/services/persiapan-pensiun-1-day"
                            element={<PersiapanPensiun1Day />}
                        />


                        {/* HALAMAN PERSIAPAN PENSIUN (2 DAY) */}
                        <Route
                            path="/services/persiapan-pensiun-2-day"
                            element={<PersiapanPensiun2Day />}
                        />


                        {/* HALAMAN PERSIAPAN PENSIUN (3 DAY) */}
                        <Route
                            path="/services/persiapan-pensiun-3-day"
                            element={<PersiapanPensiun3Day />}
                        />


                        {/* HALAMAN SMART MONEY MANAGEMENT */}
                        <Route
                            path="/training/smart-money-management"
                            element={<SmartMoneyManagement />}
                        />


                        {/* HALAMAN WORK SMARTER WITH ARTIFICIAL INTELLIGENCE */}
                        <Route
                            path="/training/work-smarter-with-artificial-intelligence"
                            element={
                                <WorkSmarterWithArtificialIntelligence />
                            }
                        />

                        {/* HALAMAN HIGH IMPACT LEADER & MANAGER */}
                        <Route
                            path="/training/high-impact-leader-manager"
                            element={<HighImpactLeaderManager />}
                        />

                        {/* HALAMAN HAPPY RETIREMENT */}
                        <Route
                            path="/training/happy-retirement"
                            element={<HappyRetirement />}
                        />

                    </Routes>


                    <Footer />

                </div>


                {/* FLOATING ACTIONS */}
                <FloatingActions />

            </div>

        </BrowserRouter>
    );
}


const root = document.getElementById('app');


if (root) {
    createRoot(root).render(<App />);
}