import { SkillBarProps } from '../types'; 

export default function SkillBar({ name, level }: SkillBarProps) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between text-sm">
                <span className="font-medium">{name}</span>
                <span className="text-purple-400">{level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        </div>
    );
}