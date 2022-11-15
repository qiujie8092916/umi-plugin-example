interface GeneratePropType {
  routerPath: string;
}

export default class {
  routerPath: string;

  constructor(props: GeneratePropType) {
    this.routerPath = props.routerPath;
  }

  run() {
    const sourceTree = require(this.routerPath).default;

    console.log('sourceTree', sourceTree);

    return sourceTree;
  }
}
