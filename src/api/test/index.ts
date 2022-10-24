import { StudentData } from './model';
import { typedFetch } from '@api';
import { useQuery } from '@tanstack/react-query';

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
