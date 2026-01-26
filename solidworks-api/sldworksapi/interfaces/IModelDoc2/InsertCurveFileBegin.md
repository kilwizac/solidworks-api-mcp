---
type: method
interface: IModelDoc2
member: InsertCurveFileBegin
returns: void
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
  - insertcurvefilebegin
  - imodeldoc2
  - model
  - doc2
  - insert
  - file
  - begin
  - void
  - free
  - point
  - feature
  - vb
  - net
  - vba
---

# IModelDoc2.InsertCurveFileBegin

Creates a curve.

## Signature

```csharp
void InsertCurveFileBegin()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method:
is the first method called that create a curve. This method must precede all calls to
IModelDoc2::InsertCurveFilePoint
.
and
IModelDoc2::InsertCurveFileEnd
must enclose all of the calls to IModelDoc2::InsertCurveFilePoint.
See the examples.

## Examples

- Insert Free Point Curve Feature (C#) (Insert_Free_Point_Curve_Feature_Example_CSharp.htm)
- Insert Free Point Curve Feature (VB.NET) (Insert_Free_Point_Curve_Feature_Example_VBNET.htm)
- Insert Free Point Curve Feature (VBA) (Insert_Free_Point_Curve_Feature_Example_VB.htm)

## See Also

- `IModelDoc2.InsertCurveFile`