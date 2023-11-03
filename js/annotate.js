//import { annotate } from 'rough-notation';

const annotationColor = 'red';


// annotate.js
import { annotate,annotationGroup } from 'https://unpkg.com/rough-notation?module';

document.addEventListener('DOMContentLoaded', function () {
    const e = document.querySelector('#anno');
    const h = document.querySelector('#h1');
    const annotation = annotate(e, { type: 'highlight',color: annotationColor });
    const hannotate = annotate(h, { type: 'circle',color: annotationColor });
    //annotation.show();

    const ag = annotationGroup([annotation,hannotate]);

    ag.show();

});





