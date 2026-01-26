---
type: method
interface: IRevisionTableAnnotation
member: GetRevisionSymbols
returns: System.Object
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
  - IRevisionTableAnnotation.GetRevisionSymbolCount
  - IRevisionTableAnnotation.IGetRevisionSymbols
keywords:
  - getrevisionsymbols
  - irevisiontableannotation
  - revision
  - table
  - annotation
  - symbols
  - id
  - int32
  - object
---

# IRevisionTableAnnotation.GetRevisionSymbols

Gets the revision symbols associated with the specified revision ID.

## Signature

```csharp
System.Object GetRevisionSymbols( 
   System.Int32
RevisionId
)
```
## Parameters

- `RevisionId` (System.Int32): Revision ID

## Return Value

Array of revision symbols

## See Also

- `IRevisionTableAnnotation.CurrentRevision`
- `IRevisionTableAnnotation.GetRevisionSymbolCount`
- `IRevisionTableAnnotation.IGetRevisionSymbols`