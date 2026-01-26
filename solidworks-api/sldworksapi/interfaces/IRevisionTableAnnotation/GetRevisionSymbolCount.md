---
type: method
interface: IRevisionTableAnnotation
member: GetRevisionSymbolCount
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
  - IRevisionTableAnnotation.CurrentRevision
  - IRevisionTableAnnotation.GetRevisionSymbols
  - IRevisionTableAnnotation.IGetRevisionSymbols
keywords:
  - getrevisionsymbolcount
  - irevisiontableannotation
  - revision
  - table
  - annotation
  - symbol
  - count
  - id
  - int32
---

# IRevisionTableAnnotation.GetRevisionSymbolCount

Gets the number of revision symbols associated with the specified revision ID.

## Signature

```csharp
System.Int32 GetRevisionSymbolCount( 
   System.Int32
RevisionId
)
```
## Parameters

- `RevisionId` (System.Int32): Revision ID

## Return Value

Number of revision symbols for this revision ID

## Remarks

Call this method before calling
IRevisionTableAnnotation::IGetRevisionSymbols
to get the size of the array for that method.

## See Also

- `IRevisionTableAnnotation.CurrentRevision`
- `IRevisionTableAnnotation.GetRevisionSymbols`
- `IRevisionTableAnnotation.IGetRevisionSymbols`