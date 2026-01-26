---
type: method
interface: IReferencePointCurveFeatureData
member: ISetThroughPoints
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of points
  -
    name: Pts
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of points VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IReferencePointCurveFeatureData.GetThroughPointCount
  - IReferencePointCurveFeatureData.GetThroughPoints
  - IReferencePointCurveFeatureData.IGetThroughPoints
  - IReferencePointCurveFeatureData.SetThroughPoints
keywords:
  - isetthroughpoints
  - ireferencepointcurvefeaturedata
  - reference
  - point
  - curve
  - feature
  - data
  - through
  - points
  - count
  - int32
  - pts
  - object
  - void
---

# IReferencePointCurveFeatureData.ISetThroughPoints

Sets the points through which this curve passes.

## Signature

```csharp
void ISetThroughPoints( 
   System.Int32
Count
,
   ref System.Object
Pts
)
```
## Parameters

- `Count` (System.Int32): Number of points
- `Pts` (System.Object): in-process, unmanaged C++: Pointer to an array of points VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IReferencePointCurveFeatureData.GetThroughPointCount`
- `IReferencePointCurveFeatureData.GetThroughPoints`
- `IReferencePointCurveFeatureData.IGetThroughPoints`
- `IReferencePointCurveFeatureData.SetThroughPoints`