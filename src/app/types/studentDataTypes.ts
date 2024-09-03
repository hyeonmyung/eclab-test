export interface StudentData {
  studentDataLists: StudentDataTypes | null;
}
export interface StudentDataTypes {
  title: string;
  counselor: {
    email: string;
    name: string;
  };
  send_dt: string;
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
