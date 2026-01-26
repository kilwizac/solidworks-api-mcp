---
type: method
interface: IRevisionTableAnnotation
member: GetRevisionForId
returns: System.String
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
  - IRevisionTableAnnotation.GetRowNumberForId
keywords:
  - getrevisionforid
  - irevisiontableannotation
  - revision
  - table
  - annotation
  - id
  - int32
  - string
---

# IRevisionTableAnnotation.GetRevisionForId

Gets the revision text for the specified revision ID.

## Signature

```csharp
System.String GetRevisionForId( 
   System.Int32
RevisionId
)
```
## Parameters

- `RevisionId` (System.Int32): Revision ID

## Return Value

Revision text

## Remarks

Call
IRevisionTableAnnotation::GetIdForRowNumber
to get the revision ID for the row in which the revision text exists.

## See Also

- `IRevisionTableAnnotation.AddRevision`
- `IRevisionTableAnnotation.CurrentRevision`
- `IRevisionTableAnnotation.DeleteRevision`
- `IRevisionTableAnnotation.GetRowNumberForId`