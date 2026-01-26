---
type: method
interface: ISldWorks
member: ICopyDocument
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
    name: ChildCount
    type: System.Int32
    description: Number of child documents for SourceDoc
  -
    name: FromChildren
    type: System.String
    description: Array containing the full path and filenames of the child documents dependent on the document specified for SourceDoc
  -
    name: ToChildren
    type: System.String
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
  - ISldWorks.CopyDocument
  - ISldWorks.MoveDocument
keywords:
  - copy
  - document
  - icopydocument
  - isldworks
  - sld
  - works
  - source
  - doc
  - string
  - dest
  - child
  - count
  - int32
  - children
  - option
---

# ISldWorks.ICopyDocument

Copies a document and optionally updates references to it.

## Signature

```csharp
System.Int32 ICopyDocument( 
   System.String
SourceDoc
,
   System.String
DestDoc
,
   System.Int32
ChildCount
,
   ref System.String
FromChildren
,
   ref System.String
ToChildren
,
   System.Int32
Option
)
```
## Parameters

- `SourceDoc` (System.String): Full path and filename of the document to copy
- `DestDoc` (System.String): Full path and filename of the document to which to copy SourceDoc
- `ChildCount` (System.Int32): Number of child documents for SourceDoc
- `FromChildren` (System.String): Array containing the full path and filenames of the child documents dependent on the document specified for SourceDoc
- `ToChildren` (System.String): Array of strings containing the new full path and filenames of the child documents to which to copy the child documents specified for FromChildren
- `Option` (System.Int32): Copy options as defined by swMoveCopyOptions_e

## Return Value

Success or error code as defined by swMoveCopyError_e

## Remarks

There can be no documents open when using this method.

## Examples

- Copy Document (C++) (Copy_Document_Example_CPlusPlus_COM.htm)

## See Also

- `IModelDocExtension.SaveAs`
- `ISldWorks.CopyDocument`
- `ISldWorks.MoveDocument`