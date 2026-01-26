---
type: method
interface: IRefAxis
member: GetRefAxisParams
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRefAxis.IGetRefAxisParams
keywords:
  - getrefaxisparams
  - irefaxis
  - ref
  - axis
  - params
  - object
  - parameters
  - reference
  - vba
---

# IRefAxis.GetRefAxisParams

Gets information for a reference axis.

## Signature

```csharp
System.Object GetRefAxisParams()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is the following array of doubles:
[
StartPt[3], EndPt[3]
]
where:
StartPt[3]
= array of three values describing the x,y,z start point of the reference axis.
EndPt[3]
= array of three values describing the x,y,z end point of the reference axis.

## Examples

- Get Parameters for Reference Axis (VBA) (Get_Parameters_for_Reference_Axis_Example_VB.htm)

## See Also

- `IRefAxis.IGetRefAxisParams`