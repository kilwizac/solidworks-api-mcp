---
type: method
interface: IDiagnoseResult
member: GetCoEdgesAtGap
returns: System.Object
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
related:
  - IDiagnoseResult.GetCoEdgesCountAtGap
  - IDiagnoseResult.IGetCoEdgesAtGap
keywords:
  - gap
  - coedges
  - getcoedgesatgap
  - idiagnoseresult
  - diagnose
  - result
  - co
  - edges
  - index
  - int32
  - object
  - fill
  - gaps
  - body
  - vb
  - net
  - vba
---

# IDiagnoseResult.GetCoEdgesAtGap

Gets the coedges at the specified gap.

## Signature

```csharp
System.Object GetCoEdgesAtGap( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index number of the gap to get

## Return Value

Array of coedges

## Remarks

Call
IDiagnoseResult::GetGapsCount
before calling this method to determine the index number of the gap to get on this body.

## Examples

- Get and Fill Gaps in Body (C#) (Get_and_Fill_Gaps_in_Body_Example_CSharp.htm)
- Get and Fill Gaps in Body (VB.NET) (Get_and_Fill_Gaps_in_Body_Example_VBNET.htm)
- Get and Fill Gaps in Body (VBA) (Get_and_Fill_Gaps_in_Body_Example_VB.htm)

## See Also

- `IDiagnoseResult.GetCoEdgesCountAtGap`
- `IDiagnoseResult.IGetCoEdgesAtGap`