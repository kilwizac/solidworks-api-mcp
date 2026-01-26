---
type: method
interface: IReferencePointCurveFeatureData
member: GetThroughPointCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IReferencePointCurveFeatureData.GetThroughPoints
  - IReferencePointCurveFeatureData.ISetThroughPoints
  - IReferencePointCurveFeatureData.SetThroughPoints
keywords:
  - getthroughpointcount
  - ireferencepointcurvefeaturedata
  - reference
  - point
  - curve
  - feature
  - data
  - through
  - count
  - int32
---

# IReferencePointCurveFeatureData.GetThroughPointCount

Gets the number of points through which this curve passes.

## Signature

```csharp
System.Int32 GetThroughPointCount()
```
## Parameters

None.

## Return Value

Number of points

## Remarks

Call this method before calling
IReferencePointCurveFeatureData::IGetThroughPoints
.

## Examples

- IReferencePointCurveFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IReferencePointCurveFeatureData)

## See Also

- `IReferencePointCurveFeatureData.GetThroughPoints`
- `IReferencePointCurveFeatureData.ISetThroughPoints`
- `IReferencePointCurveFeatureData.SetThroughPoints`