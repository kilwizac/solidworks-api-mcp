---
type: property
interface: ICurve
member: LineParams
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.ILineParams
  - ICurve.Identity
  - ICurve.IsLine
keywords:
  - lineparams
  - icurve
  - curve
  - line
  - params
  - object
  - angle
  - between
  - plane
  - vba
  - parameters
readonly: true
---

# ICurve.LineParams

Gets the parameters of a curve that is a line.

## Signature

```csharp
System.Object LineParams {get;}
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is an array of 6 double values:
[
rootPoint.x, rootPoint.y, rootPoint.z, direction.x, direction.y, direction.z
]
SOLIDWORKS stores
rootPoint
in meters.

## Examples

- Get Angle Between Plane and Line (VBA) (Get_Angle_Between_Plane_and_Line_Example_VB.htm)
- Get Line Parameters (VBA) (Get_Line_Parameters_Example_VB.htm)

## See Also

- `ICurve.ILineParams`
- `ICurve.Identity`
- `ICurve.IsLine`