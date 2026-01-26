---
type: method
interface: IRevisionTableAnnotation
member: GetIdForRowNumber
returns: System.Int32
parameters:
  -
    name: RowIndex
    type: System.Int32
    description: 0-based index for this row number
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IRevisionTableAnnotation.AddRevision
  - IRevisionTableAnnotation.CurrentRevision
  - IRevisionTableAnnotation.DeleteRevision
  - IRevisionTableAnnotation.GetRevisionForId
  - IRevisionTableAnnotation.GetRowNumberForId
keywords:
  - getidforrownumber
  - irevisiontableannotation
  - revision
  - table
  - annotation
  - id
  - row
  - number
  - index
  - int32
---

# IRevisionTableAnnotation.GetIdForRowNumber

Gets the revision ID for the specified row number.

## Signature

```csharp
System.Int32 GetIdForRowNumber( 
   System.Int32
RowIndex
)
```
## Parameters

- `RowIndex` (System.Int32): 0-based index for this row number

## Return Value

Revision ID

## Remarks

This method is useful when working with a row via the
ITableAnnotation
object.

## See Also

- `IRevisionTableAnnotation.AddRevision`
- `IRevisionTableAnnotation.CurrentRevision`
- `IRevisionTableAnnotation.DeleteRevision`
- `IRevisionTableAnnotation.GetRevisionForId`
- `IRevisionTableAnnotation.GetRowNumberForId`