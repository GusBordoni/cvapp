import GeneralInfo from "./components/GeneralInfo";
import GoalsInfo from "./components/GoalsInfo";
import EducationInfo from "./components/EducationInfo";
import ExpInfo from "./components/ExpInfo";
import SkillsInfo from './components/SkillsInfo';

export default function CompleteCV() {
    return (
        <div className='w-4xl flex flex-col bg-white p-12 min-h-screen' id='print-area'>
            <GeneralInfo />
            <GoalsInfo />
            <EducationInfo />
            <ExpInfo />
            <SkillsInfo />
        </div>
    )
}