import { useQuery, useMutation } from '@tanstack/react-query';

export type StudentData = {
  id: string;
};

// 학생 리스트
const getStudentList = (querys: {
  page: number;
  search: string;
  size: number;
}) =>
  typedFetch<StudentData[]>({
    method: 'GET',
    reqPath: '/api/admin/users/students',
    querys,
  });
