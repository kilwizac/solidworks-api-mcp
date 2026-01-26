---
type: method
interface: ICurve
member: ReverseEvaluate
returns: System.Double
parameters:
  -
    name: PositionX
    type: System.Double
    description: X coordinate of this location on the curve
  -
    name: PositionY
    type: System.Double
    description: Y coordinate of this location on the curve
  -
    name: PositionZ
    type: System.Double
    description: Z coordinate of this location on the curve
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IFace2.IReverseEvaluate
  - IFace2.ReverseEvaluate
keywords:
  - curve
  - see
  - also
  - icurve
  - uv
  - parameters
  - reverseevaluate
  - reverse
  - evaluate
  - position
  - double
  - xyz
  - location
  - vba
  - vb
  - net
---

# ICurve.ReverseEvaluate

Gets the U parameter for the given XYZ location on this curve.

## Signature

```csharp
System.Double ReverseEvaluate( 
   System.Double
PositionX
,
   System.Double
PositionY
,
   System.Double
PositionZ
)
```
## Parameters

- `PositionX` (System.Double): X coordinate of this location on the curve
- `PositionY` (System.Double): Y coordinate of this location on the curve
- `PositionZ` (System.Double): Z coordinate of this location on the curve

## Return Value

U parameter value for this location on the curve

## Examples

- Get UV Parameters for XYZ Location (VBA) (Get_UV_Parameters_For_XYZ_Location_Example_VB.htm)
- Get UV Parameters for XYZ Location (VB.NET) (Get_UV_Parameters_For_XYZ_Location_Example_VBNET.htm)
- Get UV Parameters for XYZ Location (C#) (Get_UV_Parameters_For_XYZ_Location_Example_CSharp.htm)

## See Also

- `IFace2.IReverseEvaluate`
- `IFace2.ReverseEvaluate`