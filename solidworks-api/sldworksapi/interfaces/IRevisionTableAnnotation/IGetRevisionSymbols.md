---
type: method
interface: IRevisionTableAnnotation
member: IGetRevisionSymbols
returns: Note
parameters:
  -
    name: RevisionId
    type: System.Int32
    description: Revision ID
  -
    name: Count
    type: System.Int32
    description: Number of revision symbols
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IRevisionTableAnnotation.CurrentRevision
  - IRevisionTableAnnotation.GetRevisionSymbols
keywords:
  - igetrevisionsymbols
  - irevisiontableannotation
  - revision
  - table
  - annotation
  - symbols
  - id
  - int32
  - count
  - note
---

# IRevisionTableAnnotation.IGetRevisionSymbols

Gets the revision symbols associated with the specified revision ID.

## Signature

```csharp
Note IGetRevisionSymbols( 
   System.Int32
RevisionId
,
   System.Int32
Count
)
```
## Parameters

- `RevisionId` (System.Int32): Revision ID
- `Count` (System.Int32): Number of revision symbols

## Return Value

in-process, unmanaged C++: Pointer to an array of revision symbols VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IRevisionTableAnnotation::GetRevisionSymbolCount
before calling this method to get the value of Count.

## See Also

- `IRevisionTableAnnotation.CurrentRevision`
- `IRevisionTableAnnotation.GetRevisionSymbols`