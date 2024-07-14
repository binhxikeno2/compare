import { Transform } from 'class-transformer';

import { objectToInstance } from '@/libs/transformer';

export class PaginateReqDto {
  @Transform((val) => Number(val || 0))
  page?: number;

  @Transform((val) => Number(val || 0))
  perPage?: number;

  constructor(data?: Partial<PaginateReqDto>) {
    objectToInstance(data, this);
  }
}
