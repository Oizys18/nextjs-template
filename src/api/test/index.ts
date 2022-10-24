import { StudentData } from './model';
import { typedFetch } from '@api';

export const getStudentList = (querys: {
  page: number;
  search: string;
  size: number;
}) =>
  typedFetch<StudentData[]>({
    method: 'GET',
    reqPath: '/api/admin/users/students',
    querys,
  });
