import { Transform, Type } from 'class-transformer';

import { objectToInstance } from '@/libs/transformer';

export class PaginateResDto {
  @Transform((val) => Number(val || 0))
  total!: number;

  @Transform((val) => Number(val || 0))
  page!: number;

  @Transform((val) => Number(val || 0))
  perPage!: number;

  constructor(data?: Partial<PaginateResDto>) {
    objectToInstance(data, this);
  }
}

export class TemplateDataResDto<T> {
  @Type(() => PaginateResDto)
  paginate!: PaginateResDto;

  data!: T;
}
