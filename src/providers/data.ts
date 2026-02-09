// import { createSimpleRestDataProvider } from "@refinedev/rest/simple-rest";
// import { API_URL } from "./constants";
// export const { dataProvider, kyInstance } = createSimpleRestDataProvider({
//   apiURL: API_URL,
// });
import {
  BaseRecord,
  DataProvider,
  GetListParams,
  GetListResponse,
} from "@refinedev/core";

export type Subject = {
  id: string;
  code: string;
  name: string;
  department: string;
  description: string;
  createdAt: string;
};

export const mockSubjects: Subject[] = [
  {
    id: "subj-cs101",
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "CS",
    description:
      "Foundations of programming, problem-solving, and computational thinking with a focus on basic algorithms and data representation.",
    createdAt: new Date().toISOString(),
    },
  {
    id: "subj-math201",
    code: "MATH201",
    name: "Linear Algebra",
    department: "Mathematics",
    description:
      "Vector spaces, matrices, linear transformations, eigenvalues/eigenvectors, and applications to systems of equations and data analysis.",
    createdAt: new Date().toISOString(),
    },
  {
    id: "subj-phy150",
    code: "PHY150",
    name: "General Physics I",
    department: "Physics",
    description:
      "Classical mechanics covering kinematics, Newton's laws, work and energy, momentum, rotational motion, and basic oscillations.",
    createdAt: new Date().toISOString(),
    },
];

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") {
      return {
        data: [] as TData[],
        total: 0,
      };
    }

    return {
      data: mockSubjects as unknown as TData[],
      total: mockSubjects.length,
    };
  },

  getOne: async () => {
    throw new Error("This function is not present in mock.");
  },
  create: async () => {
    throw new Error("This function is not present in mock.");
  },
  update: async () => {
    throw new Error("This function is not present in mock.");
  },
  deleteOne: async () => {
    throw new Error("This function is not present in mock.");
  },

  getApiUrl: () => "",
};
