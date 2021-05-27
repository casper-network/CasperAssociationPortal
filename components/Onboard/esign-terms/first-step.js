import Document from '../../icons/document';

const EsignTermsFirstStep = ({
  documents,
  selectedDocument,
  onDocumentSelect,
}) => (
  <div className="pt-8">
    <p className="text-2.5xl">Members must sign the Membership Agreement</p>
    <p className="text-sm mt-2 text-dark1">
      Clicking below will open up the hellosign document for capturing your
      electronic signature
    </p>
    <div className="mt-10 flex flex-wrap space-x-10">
      {documents.map(document => (
        <button
          type="button"
          className="text-center focus:outline-none"
          onClick={() => onDocumentSelect(document)}
        >
          <Document
            width={38}
            height={50}
            strokeColor={document === selectedDocument ? '#FF473E' : '#323339'}
            strokeWidth={document === selectedDocument ? 2 : 1}
          />
          <p className="text-dark3 mt-1 text-xs">{document}</p>
        </button>
      ))}
    </div>
  </div>
);

export default EsignTermsFirstStep;