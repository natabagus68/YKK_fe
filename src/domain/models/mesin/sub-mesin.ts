import { Entity } from "../_entity";

export interface ISubMesinProps {
  id: string | undefined;
  no: string;
  name: string;
}

export interface ISubMesin {
  unmarshall(): ISubMesinProps;
}

export class SubMesin extends Entity<ISubMesinProps> implements ISubMesin {
  static create(props: ISubMesinProps) {
    return new SubMesin(props);
  }
  unmarshall(): ISubMesinProps {
    return {
      id: this.id,
      no: this.no,
      name: this.name,
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }
  get no(): string {
    return this._props.no;
  }
  get name(): string {
    return this._props.name;
  }
}
