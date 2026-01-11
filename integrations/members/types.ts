// Mock type since @wix/members is removed
export namespace members {
  export interface Member {
    _id: string;
    contactId?: string;
    loginEmail?: string;
    loginEmailVerified?: boolean;
    status?: string;
    contact?: {
      firstName?: string;
      lastName?: string;
      phones?: string[];
    };
    profile?: {
      nickname?: string;
      slug?: string;
      title?: string;
      photo?: {
        url?: string;
        height?: number;
        width?: number;
        offsetX?: number;
        offsetY?: number;
      };
    };
    _createdDate?: Date;
    _updatedDate?: Date;
    lastLoginDate?: Date;
  }
  
  export interface GetMyMemberResponse {
    member?: Member;
  }
}

export type Member = members.Member;