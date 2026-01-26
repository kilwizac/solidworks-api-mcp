---
type: method
interface: IReferencePointCurveFeatureData
member: IGetThroughPoints
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of points
  -
    name: Type
    type: System.Int32
    description: Type of entities (sketch points or vertices) as defined by swSelectType_e
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
  - igetthroughpoints
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
  - type
  - object
---

# IReferencePointCurveFeatureData.IGetThroughPoints

Gets the points through which this curve passes.

## Signature

```csharp
System.Object IGetThroughPoints( 
   System.Int32
Count
,
   out System.Int32
Type
)
```
## Parameters

- `Count` (System.Int32): Number of points
- `Type` (System.Int32): Type of entities (sketch points or vertices) as defined by swSelectType_e

## Return Value

in-process, unmanaged C++: Pointer to an array of points VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IReferencePointCurveFeatureData::GetThroughPointCount
before calling this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IReferencePointCurveFeatureData.GetThroughPoints`
- `IReferencePointCurveFeatureData.ISetThroughPoints`
- `IReferencePointCurveFeatureData.SetThroughPoints`