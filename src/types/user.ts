export interface User {
  id: string;
  avatar: string;
  email: string;
  name: string;
  user_profile?: {
    id: string;
    name: string;
    branchName: string;
    cityName: string;
    departmentName: string;
    gender: string;
    mobileNumber: string;
    employeeId: null;
    users_permissions_user: string;
    playbloUserId: string;
    mobile_number_verified: boolean;
    business_entity: {
      id: string;
      name: string;
    };
  };
  [key: string]: any;
}
