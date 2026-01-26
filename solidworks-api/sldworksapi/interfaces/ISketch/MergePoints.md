---
type: method
interface: ISketch
member: MergePoints
returns: System.Boolean
parameters:
  -
    name: Distance
    type: System.Double
    description: Distance at which points are considered coincident
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSketchPoints2
  - ISketch.IGetSketchPoints2
  - ISketchPoint
keywords:
  - mergepoints
  - isketch
  - sketch
  - merge
  - points
  - distance
  - double
  - boolean
---

# ISketch.MergePoints

Merges sketch points within a specified distance.

## Signature

```csharp
System.Boolean MergePoints( 
   System.Double
Distance
)
```
## Parameters

- `Distance` (System.Double): Distance at which points are considered coincident

## Return Value

True if successful, false if not

## Remarks

This method requires that only one open contour exists in the sketch. To specify a distance below which points are automatically merged while creating the segments, use
ISketchRelationManager::AddRelation
or
ISketchRelationManager::IAddRelation
and swConstraintType_COINCIDENT.

## See Also

- `ISketch.GetSketchPoints2`
- `ISketch.IGetSketchPoints2`
- `ISketchPoint`