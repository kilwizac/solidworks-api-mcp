---
type: method
interface: IImportedCurveFeatureData
member: IGetCurves
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of curves
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
  - igetcurves
  - iimportedcurvefeaturedata
  - imported
  - curve
  - feature
  - data
  - curves
  - count
  - int32
  - object
---

# IImportedCurveFeatureData.IGetCurves

Gets the curves for this imported curve feature.

## Signature

```csharp
System.Object IGetCurves( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of curves

## Return Value

in-process, unmanaged C++: Pointer to an array of curves of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IImportedCurveFeatureData::GetCurveCount
before calling this method.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IImportedCurveFeatureData.Curves`
- `IImportedCurveFeatureData.ISetCurves`