import { Entity } from "../_entity";

export interface IParameterProps {
  id?: string | undefined;
  indicator?: string | undefined;
  name: string;
  variable: string;
}

export interface IParameter {
  unmarshall(): IParameterProps;
}

export class Parameter extends Entity<IParameterProps> implements IParameter {
  static create(props: IParameterProps) {
    return new Parameter(props);
  }
  unmarshall(): IParameterProps {
    return {
      id: this.id,
      indicator: this.indicator,
      name: this.name,
      variable: this.variable,
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }
  get indicator(): string | undefined {
    return this._props.indicator;
  }
  get name(): string {
    return this._props.name;
  }
  get variable(): string {
    return this._props.variable;
  }
}
