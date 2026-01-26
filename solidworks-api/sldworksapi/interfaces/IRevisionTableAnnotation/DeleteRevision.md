---
type: method
interface: IRevisionTableAnnotation
member: DeleteRevision
returns: System.Boolean
parameters:
  -
    name: RevisionId
    type: System.Int32
    description: Revision ID
  -
    name: DeleteSymbols
    type: System.Boolean
    description: True to delete all associated symbols, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IRevisionTableAnnotation.AddRevision
  - IRevisionTableAnnotation.CurrentRevision
  - IRevisionTableAnnotation.GetIdForRowNumber
  - IRevisionTableAnnotation.GetRevisionForId
  - IRevisionTableAnnotation.GetRowNumberForId
keywords:
  - deleterevision
  - irevisiontableannotation
  - revision
  - table
  - annotation
  - delete
  - id
  - int32
  - symbols
  - boolean
---

# IRevisionTableAnnotation.DeleteRevision

Deletes a revision from this revision table.

## Signature

```csharp
System.Boolean DeleteRevision( 
   System.Int32
RevisionId
,
   System.Boolean
DeleteSymbols
)
```
## Parameters

- `RevisionId` (System.Int32): Revision ID
- `DeleteSymbols` (System.Boolean): True to delete all associated symbols, false to not

## Return Value

True if revision ID is deleted, false if not

## Remarks

This method deletes the row in which the revision ID exists.

## See Also

- `IRevisionTableAnnotation.AddRevision`
- `IRevisionTableAnnotation.CurrentRevision`
- `IRevisionTableAnnotation.GetIdForRowNumber`
- `IRevisionTableAnnotation.GetRevisionForId`
- `IRevisionTableAnnotation.GetRowNumberForId`