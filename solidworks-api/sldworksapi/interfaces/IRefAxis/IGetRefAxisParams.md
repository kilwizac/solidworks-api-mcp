---
type: method
interface: IRefAxis
member: IGetRefAxisParams
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRefAxis.GetRefAxisParams
keywords:
  - igetrefaxisparams
  - irefaxis
  - ref
  - axis
  - params
  - double
  - info
  - plane
---

# IRefAxis.IGetRefAxisParams

Gets information for a reference axis.

## Signature

```csharp
System.Double IGetRefAxisParams()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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

- Get Info on Plane-Axis (C++) (Get_Info_on_Plane_Axis_Example_CPlusPlus_COM.htm)

## See Also

- `IRefAxis.GetRefAxisParams`