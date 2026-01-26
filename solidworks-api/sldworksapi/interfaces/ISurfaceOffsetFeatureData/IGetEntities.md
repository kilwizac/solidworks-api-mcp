---
type: method
interface: ISurfaceOffsetFeatureData
member: IGetEntities
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of offset surfaces or faces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceOffsetFeatureData.Entities
  - ISurfaceOffsetFeatureData.ISetEntities
keywords:
  - igetentities
  - isurfaceoffsetfeaturedata
  - surface
  - offset
  - feature
  - data
  - entities
  - count
  - int32
  - object
---

# ISurfaceOffsetFeatureData.IGetEntities

Gets the offset surfaces or faces of this surface offset feature.

## Signature

```csharp
System.Object IGetEntities( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of offset surfaces or faces

## Return Value

in-process, unmanaged C++: Pointer to an array of offset surface or face feature entities of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISurfaceOffsetFeatureData::GetEntitiesCount
before calling this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfaceOffsetFeatureData.Entities`
- `ISurfaceOffsetFeatureData.ISetEntities`