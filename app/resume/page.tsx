"use client";
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function ResumePage() {
    return <div>
        <ResumePdf />        
    </div>
}

import { useState } from 'react';

function ResumePdf() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="https://raw.githubusercontent.com/ClayMav/resume/main/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
        <div className='flex gap-2'>
          <button onClick={()=>pageNumber>1 && setPageNumber((p)=>p-1)}>Previous</button>
          <button onClick={()=>numPages && pageNumber<numPages-1 && setPageNumber((p)=>p+1)}>Next</button>
        </div>
      </p>
    </div>
  );
}
