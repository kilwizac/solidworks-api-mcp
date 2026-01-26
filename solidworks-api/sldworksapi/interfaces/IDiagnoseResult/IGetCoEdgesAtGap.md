---
type: method
interface: IDiagnoseResult
member: IGetCoEdgesAtGap
returns: CoEdge
parameters:
  -
    name: Index
    type: System.Int32
    description: Index number of the gap to get
  -
    name: CoEdgeCount
    type: System.Int32
    description: Number of coedges at that gap
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - gap
  - coedges
  - igetcoedgesatgap
  - idiagnoseresult
  - diagnose
  - result
  - co
  - edges
  - index
  - int32
  - edge
  - count
---

# IDiagnoseResult.IGetCoEdgesAtGap

Gets the coedges at the specified gap.

## Signature

```csharp
CoEdge IGetCoEdgesAtGap( 
   System.Int32
Index
,
   System.Int32
CoEdgeCount
)
```
## Parameters

- `Index` (System.Int32): Index number of the gap to get
- `CoEdgeCount` (System.Int32): Number of coedges at that gap

## Return Value

in-process, unmanaged C++: Pointer to an array of ICoEdge objects VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call:
IDiagnoseResult::GetGapsCount
before calling this method to determine the index number of the gap to get on this body.
IDiagnoseResult::GetCoEdgesCountAtGap
before calling this method to get the number of coedges at the gap on this body.