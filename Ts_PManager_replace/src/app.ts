/// <reference path="./components/project-input.ts"/>
/// <reference path="./components/project-list.ts"/>

namespace App {
    const prjInpunt = new ProjectInput();
    const activeProjectList = new ProjectList('active')
    const finishedProjectList = new ProjectList('finished')
}