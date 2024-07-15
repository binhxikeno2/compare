import { objectToInstance } from '@/libs/transformer';

export class ExampleReqDto {
  email!: string;
  password!: string;

  constructor(data?: Partial<ExampleReqDto>) {
    objectToInstance(data, this);
  }
}
