---
type: method
interface: ISldWorks
member: MoveDocument
returns: System.Int32
parameters:
  -
    name: SourceDoc
    type: System.String
    description: Full path and filename of the document to move
  -
    name: DestDoc
    type: System.String
    description: Full path and filename of the new document to which to move the document specified for SourceDoc
  -
    name: FromChildren
    type: System.Object
    description: Array of strings containing the full path and filenames of the child documents dependent on the document specified for SourceDoc
  -
    name: ToChildren
    type: System.Object
    description: Array of strings containing the new full path and filenames for the child documents to which to move the documents specified for FromChildren
  -
    name: Option
    type: System.Int32
    description: Move options as defined by swMoveCopyOptions_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.CopyDocument
  - ISldWorks.ICopyDocument
  - ISldWorks.IMoveDocument
keywords:
  - document
  - move
  - movedocument
  - isldworks
  - sld
  - works
  - source
  - doc
  - string
  - dest
  - children
  - object
  - option
  - int32
---

# ISldWorks.MoveDocument

Moves a document and optionally updates references to it.

## Signature

```csharp
System.Int32 MoveDocument( 
   System.String
SourceDoc
,
   System.String
DestDoc
,
   System.Object
FromChildren
,
   System.Object
ToChildren
,
   System.Int32
Option
)
```
## Parameters

- `SourceDoc` (System.String): Full path and filename of the document to move
- `DestDoc` (System.String): Full path and filename of the new document to which to move the document specified for SourceDoc
- `FromChildren` (System.Object): Array of strings containing the full path and filenames of the child documents dependent on the document specified for SourceDoc
- `ToChildren` (System.Object): Array of strings containing the new full path and filenames for the child documents to which to move the documents specified for FromChildren
- `Option` (System.Int32): Move options as defined by swMoveCopyOptions_e

## Return Value

Success or error code as defined by swMoveCopyError_e

## See Also

- `ISldWorks.CopyDocument`
- `ISldWorks.ICopyDocument`
- `ISldWorks.IMoveDocument`