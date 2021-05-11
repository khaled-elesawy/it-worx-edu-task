class Filter implements IFilter {
  id: string;
  propertyName: string;
  constructor(public title: string, public selectedFilters: Array<Filter>, propertyName: string) {
    this.id = (
      new Date().getTime() +
      Math.floor(Math.random() * 100) +
      1
    ).toString();
    this.title = title;
    this.propertyName = propertyName;
  }

  handler(val: any): boolean { return true }

  add(): void {
    this.selectedFilters.push(this);
  }

  remove(): void {
    const index = this.selectedFilters.findIndex(f => f.id === this.id);
    if (index > -1) {
      this.selectedFilters.splice(index, 1);
    }
  }
}

export interface IFilter {
  id: string;
  title: string;
  selectedFilters: Array<Filter>;
  propertyName: string;
  add: () => void;
  remove: () => void;
  handler: (val: string | number) => boolean;
}

export class DurationFilter extends Filter implements IFilter {
  constructor(
    title: string,
    public from: number,
    public to: number,
    selectedDurations: Array<Filter>
  ) {
    super(title, selectedDurations, 'CourseDuration');
  }

  handler(val: number): boolean {
    if (!this.to) this.to = Infinity;
    return val >= this.from && val <= this.to;
  }
}

export class CategoryFilter extends Filter implements IFilter {
  constructor(
    title: string,
    selectedCategories: Array<Filter>,
    public otherThan?: Array<string>
  ) {
    super(title, selectedCategories, 'CourseCategory');
  }

  handler(val: string): boolean {
    if (this.otherThan && this.otherThan.length) {
      return this.otherThan.every((category) => val !== category);
    } else {
      return val === this.title;
    }
  }
}

export class DifficultyFilter extends Filter implements IFilter {
  constructor(title: string, selectedDifficulties: Array<Filter>) {
    super(title, selectedDifficulties, 'courseLevel');
  }

  handler(val: string): boolean {
    return val === this.title;
  }
}
