---
type: method
interface: ISurfacePlanarFeatureData
member: GetBoundingEntitiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfacePlanarFeatureData.BoundingEntities
  - ISurfacePlanarFeatureData.ISetBoundingEntities
keywords:
  - getboundingentitiescount
  - isurfaceplanarfeaturedata
  - surface
  - planar
  - feature
  - data
  - bounding
  - entities
  - count
  - int32
---

# ISurfacePlanarFeatureData.GetBoundingEntitiesCount

Gets the number of bounding entities for this planar surface feature.

## Signature

```csharp
System.Int32 GetBoundingEntitiesCount()
```
## Parameters

None.

## Return Value

Number of bounding entities

## Remarks

Call this method before calling
ISurfacePlanarFeatureData::IGetBoundingEntities
to get the size of the array for that method.

## Examples

- ISurfacePlanarFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISurfacePlanarFeatureData)

## See Also

- `ISurfacePlanarFeatureData.BoundingEntities`
- `ISurfacePlanarFeatureData.ISetBoundingEntities`