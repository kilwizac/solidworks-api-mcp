---
type: property
interface: IImportedCurveFeatureData
member: Curves
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
related:
  - IImportedCurveFeatureData.GetCurveCount
  - IImportedCurveFeatureData.IGetCurves
  - IImportedCurveFeatureData.ISetCurves
keywords:
  - curves
  - iimportedcurvefeaturedata
  - imported
  - curve
  - feature
  - data
  - object
readonly: null
---

# IImportedCurveFeatureData.Curves

Gets or sets the curves for this imported curve feature.

## Signature

```csharp
System.Object Curves {get; set;}
```
## Parameters

None.

## Return Value

Array of curves (see Remarks )

## Remarks

The curve feature is formed in the order of the input curves.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `IImportedCurveFeatureData.GetCurveCount`
- `IImportedCurveFeatureData.IGetCurves`
- `IImportedCurveFeatureData.ISetCurves`