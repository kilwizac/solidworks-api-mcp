---
type: property
interface: ISurfaceFlattenFeatureData
member: MapEdges
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISurfaceFlattenFeatureData.TearEdges
keywords:
  - mapedges
  - isurfaceflattenfeaturedata
  - surface
  - flatten
  - feature
  - data
  - map
  - edges
  - object
readonly: null
---

# ISurfaceFlattenFeatureData.MapEdges

Gets or sets the map edges for this surface-flatten feature.

## Signature

```csharp
System.Object MapEdges {get; set;}
```
## Parameters

None.

## Return Value

Array of entities that lie on the selected faces or surfaces to flatten (see Remarks )

## Remarks

Map edges:
are entities to map to the flattened surface. By default, any entity that lies on top of a face or surface to flatten is ignored unless the user selects the entity as a map edge.
are useful when users want to see where a selected entity on the original body would lie on a flattened surface. For example, users might select edges as map lines to serve as bend lines in the flattened surface.
can be any of these types of selected entities:
edges,
reference curves,
2D/3D splines,
sketches, and
sketch text.
The SOLIDWORKS API returns
edges
for the entities selected for the map edges in a surface-flatten feature.

## See Also

- `ISurfaceFlattenFeatureData.TearEdges`