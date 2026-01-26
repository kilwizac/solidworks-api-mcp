---
type: method
interface: IModelDoc2
member: InsertCurveFileEnd
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - IModelDoc2.InsertCurveFile
keywords:
  - curve
  - see
  - also
  - icurve
  - reference
  - geometry
  - insertcurvefileend
  - imodeldoc2
  - model
  - doc2
  - insert
  - file
  - end
  - boolean
  - free
  - point
  - feature
  - vb
  - net
  - vba
---

# IModelDoc2.InsertCurveFileEnd

Creates a curve.

## Signature

```csharp
System.Boolean InsertCurveFileEnd()
```
## Parameters

None.

## Return Value

True if curve is created successfully, false if not

## Remarks

This method:
is the last method called to create a curve.
and
IModelDoc2::InsertCurveFileBegin
must enclose all of the calls to
IModelDoc2::InsertCurveFilePoint
.
See the examples.

## Examples

- Insert Free Point Curve Feature (C#) (Insert_Free_Point_Curve_Feature_Example_CSharp.htm)
- Insert Free Point Curve Feature (VB.NET) (Insert_Free_Point_Curve_Feature_Example_VBNET.htm)
- Insert Free Point Curve Feature (VBA) (Insert_Free_Point_Curve_Feature_Example_VB.htm)

## See Also

- `IModelDoc2.InsertCurveFile`