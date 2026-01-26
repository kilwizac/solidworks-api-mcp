---
type: method
interface: ISurfaceKnitFeatureData
member: ISetEntities
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of faces
  -
    name: FaceArr
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of knit entities ( faces and surfaces ) of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceKnitFeatureData.Entities
  - ISurfaceKnitFeatureData.GetEntitiesCount
  - ISurfaceKnitFeatureData.IGetEntities
keywords:
  - isetentities
  - isurfaceknitfeaturedata
  - surface
  - knit
  - feature
  - data
  - entities
  - count
  - int32
  - face
  - arr
  - object
  - void
---

# ISurfaceKnitFeatureData.ISetEntities

Sets the faces and surfaces to knit.

## Signature

```csharp
void ISetEntities( 
   System.Int32
Count
,
   ref System.Object
FaceArr
)
```
## Parameters

- `Count` (System.Int32): Number of faces
- `FaceArr` (System.Object): in-process, unmanaged C++: Pointer to an array of knit entities ( faces and surfaces ) of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfaceKnitFeatureData.Entities`
- `ISurfaceKnitFeatureData.GetEntitiesCount`
- `ISurfaceKnitFeatureData.IGetEntities`