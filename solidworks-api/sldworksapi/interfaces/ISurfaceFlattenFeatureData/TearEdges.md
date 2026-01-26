---
type: property
interface: ISurfaceFlattenFeatureData
member: TearEdges
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISurfaceFlattenFeatureData.MapEdges
keywords:
  - tearedges
  - isurfaceflattenfeaturedata
  - surface
  - flatten
  - feature
  - data
  - tear
  - edges
  - object
  - vb
  - net
  - vba
readonly: null
---

# ISurfaceFlattenFeatureData.TearEdges

Gets or sets the tear edges for the relief cuts for this surface-flatten feature.

## Signature

```csharp
System.Object TearEdges {get; set;}
```
## Parameters

None.

## Return Value

Array of entities that lie on the selected faces or surfaces to flatten (see Remarks )

## Remarks

Tear edges:
indicate where to make relief cuts before flattening the surface. During flattening, regions of the flattened surface are stretched while other regions are compressed. Adding tear edges through regions of high stress can reduce these deformations, which increases the accuracy of the flattened surface.
allow users to flatten closed surfaces, such as spheres or entire solid bodies, that would otherwise not be flattened. See the
Example
section.
can be any of these types of selected entities:
edges,
reference curves, and
2D/3D splines.
must each intersect the face or surface being flattened while touching one boundary edge, which is an edge adjacent to exactly one face or surface.
are only applied when
ISurfaceFlattenFeatureData::ShouldMakeTears
is true.
The SOLIDWORKS API returns
edges
for the entities selected for the tear edges in a surface-flatten feature.

## Examples

- Get Data for Surface-flatten Feature (C#) (Get_Data_for_Surface_Flatten_Feature_Example_CSharp.htm)
- Get Data for Surface-flatten Feature (VB.NET) (Get_Data_for_Surface_Flatten_Feature_Example_VBNET.htm)
- Get Data for Surface-flatten Feature (VBA) (Get_Data_for_Surface_Flatten_Feature_Example_VB.htm)

## See Also

- `ISurfaceFlattenFeatureData.MapEdges`