---
type: method
interface: IBody2
member: Diagnose
returns: DiagnoseResult
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - diagnose
  - ibody2
  - body2
  - result
  - fill
  - gaps
  - body
  - vb
  - net
  - vba
---

# IBody2.Diagnose

Gets the IDiagnoseResult object for this body.

## Signature

```csharp
DiagnoseResult Diagnose()
```
## Parameters

None.

## Return Value

Pointer to the IDiagnoseResult object

## Remarks

Use the
IDiagnoseResult
object to get the gaps and coedges in each gap on this body.

## Examples

- Get and Fill Gaps in Body (C#) (Get_and_Fill_Gaps_in_Body_Example_CSharp.htm)
- Get and Fill Gaps in Body (VB.NET) (Get_and_Fill_Gaps_in_Body_Example_VBNET.htm)
- Get and Fill Gaps in Body (VBA) (Get_and_Fill_Gaps_in_Body_Example_VB.htm)