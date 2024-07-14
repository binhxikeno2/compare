import { objectToInstance } from '@/libs/transformer';

import { TemplateDataResDto } from '../base/response';

export class ExampleDto {
  email!: string;
  password!: string;

  constructor(data?: Partial<ExampleResDto>) {
    objectToInstance(data, this);
  }
}

export class ExampleResDto extends TemplateDataResDto<ExampleDto> {
  constructor() {
    super();
  }
}
