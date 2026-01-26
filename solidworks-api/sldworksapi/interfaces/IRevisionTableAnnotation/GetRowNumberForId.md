---
type: method
interface: IRevisionTableAnnotation
member: GetRowNumberForId
returns: System.Int32
parameters:
  -
    name: RevisionId
    type: System.Int32
    description: Revision ID
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IRevisionTableAnnotation.AddRevision
  - IRevisionTableAnnotation.CurrentRevision
  - IRevisionTableAnnotation.DeleteRevision
  - IRevisionTableAnnotation.GetIdForRowNumber
  - IRevisionTableAnnotation.GetRevisionForId
keywords:
  - getrownumberforid
  - irevisiontableannotation
  - revision
  - table
  - annotation
  - row
  - number
  - id
  - int32
---

# IRevisionTableAnnotation.GetRowNumberForId

Gets the row number in the table for the specified revision ID.

## Signature

```csharp
System.Int32 GetRowNumberForId( 
   System.Int32
RevisionId
)
```
## Parameters

- `RevisionId` (System.Int32): Revision ID

## Return Value

Row number in the table for this revision ID

## See Also

- `IRevisionTableAnnotation.AddRevision`
- `IRevisionTableAnnotation.CurrentRevision`
- `IRevisionTableAnnotation.DeleteRevision`
- `IRevisionTableAnnotation.GetIdForRowNumber`
- `IRevisionTableAnnotation.GetRevisionForId`