---
type: method
interface: IImportedCurveFeatureData
member: GetCurveCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
related:
  - IImportedCurveFeatureData.Curves
  - IImportedCurveFeatureData.ISetCurves
keywords:
  - getcurvecount
  - iimportedcurvefeaturedata
  - imported
  - curve
  - feature
  - data
  - count
  - int32
  - vb
  - net
  - vba
---

# IImportedCurveFeatureData.GetCurveCount

Gets the number of curves for this imported curve feature.

## Signature

```csharp
System.Int32 GetCurveCount()
```
## Parameters

None.

## Return Value

Number of curves

## Remarks

Call this method before calling
IImportedCurveFeatureData::IGetCurves
.

## Examples

- Get Imported Curve Feature Data (C#) (Get_Imported_Curve_Feature_Data_Example_CSharp.htm)
- Get Imported Curve Feature Data (VB.NET) (Get_Imported_Curve_Feature_Data_Example_VBNET.htm)
- Get Imported Curve Feature Data (VBA) (Get_Imported_Curve_Feature_Data_Example_VB.htm)

## See Also

- `IImportedCurveFeatureData.Curves`
- `IImportedCurveFeatureData.ISetCurves`