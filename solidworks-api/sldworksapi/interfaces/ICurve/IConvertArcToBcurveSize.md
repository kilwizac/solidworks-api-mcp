---
type: method
interface: ICurve
member: IConvertArcToBcurveSize
returns: System.Int32
parameters:
  -
    name: Center
    type: System.Double
    description: Pointer to an array of doubles (x, y, z), the coordinates of the arc center
  -
    name: Axis
    type: System.Double
    description: Pointer to an array of doubles (x, y, z), the normal vector of the arc
  -
    name: Start
    type: System.Double
    description: Pointer to an array of doubles (x, y, z), the coordinates of the arc start point
  -
    name: End
    type: System.Double
    description: Pointer to an array of doubles (x, y, z), the coordinates of the arc end point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.ConvertArcToBcurve
  - ICurve.ConvertLineToBcurve
  - ICurve.ExtentCurve
  - ICurve.GetBCurveParams
  - ICurve.IConvertLineToBcurveSize
  - ICurve.IConvertPcurveToBcurveSize
  - ICurve.IGetBCurveParams
  - ICurve.IGetBCurveParamsSize2
  - ICurve.IsBcurve
  - ICurve.MakeBsplineCurve
  - ICurve.SimplifyBCurve
keywords:
  - iconvertarctobcurvesize
  - icurve
  - curve
  - convert
  - arc
  - bcurve
  - size
  - center
  - double
  - axis
  - start
  - end
  - int32
---

# ICurve.IConvertArcToBcurveSize

Gets the b-curve size for the arc's conversion given the coordinates of the two end points of a line.

## Signature

```csharp
System.Int32 IConvertArcToBcurveSize( 
   ref System.Double
Center
,
   ref System.Double
Axis
,
   ref System.Double
Start
,
   ref System.Double
End
)
```
## Parameters

- `Center` (System.Double): Pointer to an array of doubles (x, y, z), the coordinates of the arc center
- `Axis` (System.Double): Pointer to an array of doubles (x, y, z), the normal vector of the arc
- `Start` (System.Double): Pointer to an array of doubles (x, y, z), the coordinates of the arc start point
- `End` (System.Double): Pointer to an array of doubles (x, y, z), the coordinates of the arc end point

## Return Value

Size of the data necessary for the conversion to a b-curve

## See Also

- `ICurve.ConvertArcToBcurve`
- `ICurve.ConvertLineToBcurve`
- `ICurve.ExtentCurve`
- `ICurve.GetBCurveParams`
- `ICurve.IConvertLineToBcurveSize`
- `ICurve.IConvertPcurveToBcurveSize`
- `ICurve.IGetBCurveParams`
- `ICurve.IGetBCurveParamsSize2`
- `ICurve.IsBcurve`
- `ICurve.MakeBsplineCurve`
- `ICurve.SimplifyBCurve`