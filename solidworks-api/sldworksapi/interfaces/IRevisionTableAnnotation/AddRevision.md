---
type: method
interface: IRevisionTableAnnotation
member: AddRevision
returns: System.Int32
parameters:
  -
    name: Revision
    type: System.String
    description: Revision
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IRevisionTableAnnotation.CurrentRevision
  - IRevisionTableAnnotation.DeleteRevision
  - IRevisionTableAnnotation.GetIdForRowNumber
  - IRevisionTableAnnotation.GetRevisionForId
  - IRevisionTableAnnotation.GetRowNumberForId
keywords:
  - addrevision
  - irevisiontableannotation
  - revision
  - table
  - annotation
  - add
  - string
  - int32
---

# IRevisionTableAnnotation.AddRevision

Adds a revision to this revision table.

## Signature

```csharp
System.Int32 AddRevision( 
   System.String
Revision
)
```
## Parameters

- `Revision` (System.String): Revision

## Return Value

Revision ID

## Examples

- IRevisionTableAnnotation (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRevisionTableAnnotation)

## See Also

- `IRevisionTableAnnotation.CurrentRevision`
- `IRevisionTableAnnotation.DeleteRevision`
- `IRevisionTableAnnotation.GetIdForRowNumber`
- `IRevisionTableAnnotation.GetRevisionForId`
- `IRevisionTableAnnotation.GetRowNumberForId`