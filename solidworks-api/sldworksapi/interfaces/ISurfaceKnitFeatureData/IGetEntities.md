---
type: method
interface: ISurfaceKnitFeatureData
member: IGetEntities
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of knit entities
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceKnitFeatureData.Entities
  - ISurfaceKnitFeatureData.ISetEntities
keywords:
  - igetentities
  - isurfaceknitfeaturedata
  - surface
  - knit
  - feature
  - data
  - entities
  - count
  - int32
  - object
---

# ISurfaceKnitFeatureData.IGetEntities

Gets the knitted faces and surfaces for this Surface-Knit feature.

## Signature

```csharp
System.Object IGetEntities( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of knit entities

## Return Value

in-process, unmanaged C++: Pointer to an array of knit entities ( faces and surfaces ) of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISurfaceKnitFeatureData::GetEntitiesCount
before calling this method.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfaceKnitFeatureData.Entities`
- `ISurfaceKnitFeatureData.ISetEntities`