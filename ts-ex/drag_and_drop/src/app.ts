class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  constructor() {
    // 절대로 NULL이 안 될 것이라고 보장할 수 있으므로 ! 을 붙인다.
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    // 해당 Element의 컨텐츠에 대한 reference를 인수로 전달한다.
    // true는 해당 reference에 포함된 모든 sub 컨텐츠도 가져오겠다는 의미.
    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput();
