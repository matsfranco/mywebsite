interface SanityBody {
    _createdAte: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference"
    };
}

export interface Organization extends SanityBody {
    _type: "organization";
    name: string;
    logo: Image;
    logoAlt: string;
    url: string;
    city: string;
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

export interface Experience extends SanityBody {
    _type: "experience";
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
    organization: Organization;
    image: Image;
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    type: string;
    institution: string;
    image: Image;
    linkToBuild: string;
    summary: string;
    year: number;
    technologies: Technology[];
    organization: Organization;
}

export interface Social extends SanityBody {
    _type: "social"
    title: string;
    url: string;
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