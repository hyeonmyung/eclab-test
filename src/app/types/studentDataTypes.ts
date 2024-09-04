export interface StudentData {
  studentDataLists: StudentDataTypes | undefined;
}
export interface StudentDataTypes {
  filter: any;
  title: string;
  student: {
    name: string;
    email: string;
    profile: {
      id: string;
      school_id: string;
      gender: string;
      birth_day: string;
      grade: string;
      year_admission: string;
      nationality: string[];
      status_type: string;
      created_at: string;
      updated_at: string;
      school: {
        country_id: string;
        id: string;
        name: string;
        address: string;
        url: string;
        created_at: string;
        updated_at: string;
      };
    };
  };
  counselor: {
    email: string;
    name: string;
  };
  send_dt: string;
  delivered_dt: string;
  ec_report_items: {
    id: string;
    ec_db: {
      year: string;
      id: string;
      name: string;
      organization: string;
      ec_type: string;
      recognition_level: string;
      nationality: string;
      url: string;
      participate_way: string[];
      age_limit: string[];
      grade_limit: string[];
    };
    is_added: boolean;
  }[];
}
