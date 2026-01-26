---
type: method
interface: ICurve
member: IConvertLineToBcurveSize
returns: System.Int32
parameters:
  -
    name: StartPoint
    type: System.Double
    description: Array values for the coordinates of the start point of the line
  -
    name: EndPoint
    type: System.Double
    description: Array values for the coordinates of the end point of the line
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
  - ICurve.IConvertArcToBcurveSize
  - ICurve.IConvertPcurveToBcurveSize
  - ICurve.IGetBCurveParams
  - ICurve.IGetBCurveParamsSize2
  - ICurve.IsBcurve
  - ICurve.IsLine
  - ICurve.MakeBsplineCurve
  - ICurve.SimplifyBCurve
keywords:
  - iconvertlinetobcurvesize
  - icurve
  - curve
  - convert
  - line
  - bcurve
  - size
  - start
  - point
  - double
  - end
  - int32
---

# ICurve.IConvertLineToBcurveSize

Converts the specified line into a b-spline curve.

## Signature

```csharp
System.Int32 IConvertLineToBcurveSize( 
   ref System.Double
StartPoint
,
   ref System.Double
EndPoint
)
```
## Parameters

- `StartPoint` (System.Double): Array values for the coordinates of the start point of the line
- `EndPoint` (System.Double): Array values for the coordinates of the end point of the line

## Return Value

Array giving the b-spline representation of the line

## See Also

- `ICurve.ConvertArcToBcurve`
- `ICurve.ConvertLineToBcurve`
- `ICurve.ExtentCurve`
- `ICurve.GetBCurveParams`
- `ICurve.IConvertArcToBcurveSize`
- `ICurve.IConvertPcurveToBcurveSize`
- `ICurve.IGetBCurveParams`
- `ICurve.IGetBCurveParamsSize2`
- `ICurve.IsBcurve`
- `ICurve.IsLine`
- `ICurve.MakeBsplineCurve`
- `ICurve.SimplifyBCurve`