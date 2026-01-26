---
type: method
interface: ISldWorks
member: CopyDocument
returns: System.Int32
parameters:
  -
    name: SourceDoc
    type: System.String
    description: Full path and filename of the document to copy
  -
    name: DestDoc
    type: System.String
    description: Full path and filename of the document to which to copy SourceDoc
  -
    name: FromChildren
    type: System.Object
    description: Array containing the full path and filenames of the child documents dependent on the document specified for SourceDoc
  -
    name: ToChildren
    type: System.Object
    description: Array of strings containing the new full path and filenames of the child documents to which to copy the child documents specified for FromChildren
  -
    name: Option
    type: System.Int32
    description: Copy options as defined by swMoveCopyOptions_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDocExtension.SaveAs
  - ISldWorks.ICopyDocument
  - ISldWorks.MoveDocument
keywords:
  - copy
  - document
  - copydocument
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
  - vba
  - its
  - dependencies
  - vb
  - net
---

# ISldWorks.CopyDocument

Copies a document and optionally updates references to it.

## Signature

```csharp
System.Int32 CopyDocument( 
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

- `SourceDoc` (System.String): Full path and filename of the document to copy
- `DestDoc` (System.String): Full path and filename of the document to which to copy SourceDoc
- `FromChildren` (System.Object): Array containing the full path and filenames of the child documents dependent on the document specified for SourceDoc
- `ToChildren` (System.Object): Array of strings containing the new full path and filenames of the child documents to which to copy the child documents specified for FromChildren
- `Option` (System.Int32): Copy options as defined by swMoveCopyOptions_e

## Return Value

Success or error code as defined by swMoveCopyError_e

## Remarks

There can be no documents open when using this method.

## Examples

- Copy Document (VBA) (Copy_Document_Example_VB.htm)
- Copy Document and Its Dependencies (VBA) (Copy_Document_and_Its_Dependencies_Example_VB.htm)
- Copy Document and Its Dependencies (VB.NET) (Copy_Document_and_Its_Dependencies_Example_VBNET.htm)
- Copy Document and Its Dependencies (C#) (Copy_Document_and_Its_Dependencies_Example_CSharp.htm)

## See Also

- `IModelDocExtension.SaveAs`
- `ISldWorks.ICopyDocument`
- `ISldWorks.MoveDocument`