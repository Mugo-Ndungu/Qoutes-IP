export class Quote {
  public showDesc: boolean;
  constructor(public id: number, public author: string, public desc: string, public completeDate: Date) {
    this.showDesc = false;
  }
}
