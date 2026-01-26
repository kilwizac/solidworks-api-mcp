---
type: method
interface: IDiagnoseResult
member: GetGapsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - gap
  - number
  - getgapscount
  - idiagnoseresult
  - diagnose
  - result
  - gaps
  - count
  - int32
  - fill
  - body
  - vb
  - net
  - vba
---

# IDiagnoseResult.GetGapsCount

Gets the number of gaps on the body.

## Signature

```csharp
System.Int32 GetGapsCount()
```
## Parameters

None.

## Return Value

Number of gaps

## Remarks

Call this method before calling
IDiagnoseResult::GetCoEdgesAtGap
and
IDiagnoseResult::IGetCoEdgesAtGap
.

## Examples

- Get and Fill Gaps in Body (C#) (Get_and_Fill_Gaps_in_Body_Example_CSharp.htm)
- Get and Fill Gaps in Body (VB.NET) (Get_and_Fill_Gaps_in_Body_Example_VBNET.htm)
- Get and Fill Gaps in Body (VBA) (Get_and_Fill_Gaps_in_Body_Example_VB.htm)