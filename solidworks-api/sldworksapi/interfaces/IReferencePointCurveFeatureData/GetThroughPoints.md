---
type: method
interface: IReferencePointCurveFeatureData
member: GetThroughPoints
returns: System.Object
parameters:
  -
    name: Type
    type: System.Object
    description: Type of entities (sketch points or vertices) as defined by swSelectType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IReferencePointCurveFeatureData.GetThroughPointCount
  - IReferencePointCurveFeatureData.IGetThroughPoints
  - IReferencePointCurveFeatureData.ISetThroughPoints
  - IReferencePointCurveFeatureData.SetThroughPoints
keywords:
  - getthroughpoints
  - ireferencepointcurvefeaturedata
  - reference
  - point
  - curve
  - feature
  - data
  - through
  - points
  - type
  - object
---

# IReferencePointCurveFeatureData.GetThroughPoints

Gets the points through which this curve passes.

## Signature

```csharp
System.Object GetThroughPoints( 
   out System.Object
Type
)
```
## Parameters

- `Type` (System.Object): Type of entities (sketch points or vertices) as defined by swSelectType_e

## Return Value

Array of points

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IReferencePointCurveFeatureData.GetThroughPointCount`
- `IReferencePointCurveFeatureData.IGetThroughPoints`
- `IReferencePointCurveFeatureData.ISetThroughPoints`
- `IReferencePointCurveFeatureData.SetThroughPoints`