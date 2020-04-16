export interface CDM {
    POC: Number
}

export interface CAM {
    POC: Number
}

export interface Incident {
    primaryCDM: CDM;
    CAMSet: Array<CAM>;
}