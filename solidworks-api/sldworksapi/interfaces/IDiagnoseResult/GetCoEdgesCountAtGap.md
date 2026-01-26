---
type: method
interface: IDiagnoseResult
member: GetCoEdgesCountAtGap
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Index number of the gap to get
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - getcoedgescountatgap
  - idiagnoseresult
  - diagnose
  - result
  - co
  - edges
  - count
  - gap
  - index
  - int32
  - igetcoedgesatgap
---

# IDiagnoseResult.GetCoEdgesCountAtGap

Gets the number of coedges at the specified gap.

## Signature

```csharp
System.Int32 GetCoEdgesCountAtGap( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index number of the gap to get

## Return Value

Number of coedges at that gap

## Examples

- IDiagnoseResult::IGetCoEdgesAtGap (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDiagnoseResult~IGetCoEdgesAtGap)