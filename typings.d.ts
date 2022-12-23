export interface ImageData { 
    id: number;
    name: string;
    href: string;
    type: string;
    description: string;
    created_at: date;
}

export interface HeroInfo {
    id: string;
    backgroundInformation: string;
    heroImage: {
        url: string;
    };
    profilePicture: {
        url: string;
    };
    name: string;
    role: string;
}

export interface SkillDataType {
    id: string;
    name: string;
    image: {
        url: string;
    };
}

export interface Experience {
    id: string;
    startDate: date;
    endDate: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    description: string;
    skills: SkillDataType[];
    organization: Organization;
    image: {
        url: string;
    };
}

export interface Organization {
    id;
    name: string;
    logo: {
        url: string;
    };
    logoAlt: string;
    url: string;
    location: string;
}


export interface Project {
    id: string
    title: string;
    image: {
        url;
    }
    organization: Organization;
    type: string;
    department: string;
    description: string;
    skills: SkillDataType[];
    year: number;
}

interface Milestone {
    milestoneName: string;
    milestoneDate: string;
    timePeriod: string;
    organization: string;
    organizationLogo: string;
    organizationLogoAlt: string;
    description: string;
    itemImage: string;
    itemImageAlt: string;
}

interface TimeLineItem {
    milestoneName: string;
    milestoneDate: string;
    timePeriod: string;
    organization: string;
    organizationLogo: string;
    description: string;
    itemImage: string;
}