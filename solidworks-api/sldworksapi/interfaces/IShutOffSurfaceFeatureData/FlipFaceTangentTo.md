---
type: method
interface: IShutOffSurfaceFeatureData
member: FlipFaceTangentTo
returns: void
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the loop to use to create the patch
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IShutOffSurfaceFeatureData.GetFaceTangentTo
keywords:
  - flipfacetangentto
  - ishutoffsurfacefeaturedata
  - shut
  - off
  - surface
  - feature
  - data
  - flip
  - face
  - tangent
  - index
  - int32
  - void
---

# IShutOffSurfaceFeatureData.FlipFaceTangentTo

Indicates to create the patch on the opposite tangent face.

## Signature

```csharp
void FlipFaceTangentTo( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the loop to use to create the patch

## Return Value

Unknown.

## Remarks

This method is only available when the type of patch is set to swPatchTypeTangent. See
IShutOffSurfaceFeatureData::LoopPatchType
and
IShutOffSurfaceFeatureData::SetAllPatchTypes
.

## Examples

- IShutOffSurfaceFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IShutOffSurfaceFeatureData)

## See Also

- `IShutOffSurfaceFeatureData.GetFaceTangentTo`