 interface IUser {
    // firstName: string;
    // lastName: string;
    name: string;
    email: string;
    password?: string;
    dateOfBirth?: string;
    phone?: string;
    address?: string;
    rating?: string;
    reviewCount?: number;
    gender?: string;
    description?: string;
    state?: string;
    privacyPolicyAccepted?: boolean;
    isAdmin?: boolean;
    isProfileCompleted?: boolean;
    isEmergency?: boolean;
    isVerified?: boolean;
    isDeleted?: boolean;
    isBlocked?: boolean;
    image?: {
      publicFileURL: string;
      path: string;
    };
    insurance?: object | null;
    isInsurance?: boolean;
    role?: "admin" | "user" | "doctor";
    oneTimeCode?: string | null;
    earningAmount?: number;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  export default IUser