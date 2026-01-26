---
type: method
interface: IShutOffSurfaceFeatureData
member: GetFaceTangentTo
returns: Face2
parameters:
  -
    name: Index
    type: System.Int32
    description: Index for the loop where to create the patch
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IShutOffSurfaceFeatureData.FlipFaceTangentTo
keywords:
  - getfacetangentto
  - ishutoffsurfacefeaturedata
  - shut
  - off
  - surface
  - feature
  - data
  - face
  - tangent
  - index
  - int32
  - face2
---

# IShutOffSurfaceFeatureData.GetFaceTangentTo

Gets the tangent face for the specified loop where to create the patch.

## Signature

```csharp
Face2 GetFaceTangentTo( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index for the loop where to create the patch

## Return Value

Tangent face

## Remarks

This method is only available when the type of patch is set to swPatchTypeTangent. See
IShutOffSurfaceFeatureData::LoopPatchType
and
IShutOffSurfaceFeatureData::SetAllPatchTypes
.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IShutOffSurfaceFeatureData.FlipFaceTangentTo`