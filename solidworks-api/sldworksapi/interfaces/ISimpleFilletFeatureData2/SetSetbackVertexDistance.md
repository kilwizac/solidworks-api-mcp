---
type: method
interface: ISimpleFilletFeatureData2
member: SetSetbackVertexDistance
returns: System.Boolean
parameters:
  -
    name: Vtx
    type: System.Object
    description: Vertex for which to set setback distance
  -
    name: EdgeVar
    type: System.Object
    description: Array of edges for this vertex
  -
    name: DistVar
    type: System.Object
    description: Array of distances
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISimpleFilletFeatureData2.GetSetbackDistanceCount
  - ISimpleFilletFeatureData2.GetSetbackVertexDistance
  - ISimpleFilletFeatureData2.GetSetbackVertices
  - ISimpleFilletFeatureData2.GetSetbackVerticesCount
  - ISimpleFilletFeatureData2.IGetSetbackVertexDistance
  - ISimpleFilletFeatureData2.IGetSetbackVertices
  - ISimpleFilletFeatureData2.SetSetbackVertices
keywords:
  - setsetbackvertexdistance
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - setback
  - vertex
  - distance
  - vtx
  - object
  - edge
  - var
  - dist
  - boolean
---

# ISimpleFilletFeatureData2.SetSetbackVertexDistance

Sets the setback distances on fillet edges from the specified fillet corner vertex on this simple fillet feature.

## Signature

```csharp
System.Boolean SetSetbackVertexDistance( 
   System.Object
Vtx
,
   System.Object
EdgeVar
,
   System.Object
DistVar
)
```
## Parameters

- `Vtx` (System.Object): Vertex for which to set setback distance
- `EdgeVar` (System.Object): Array of edges for this vertex
- `DistVar` (System.Object): Array of distances

## Return Value

True if the setback distances are set, false if not

## Remarks

There is a one-to-one correspondence between the members of the EdgeVar and DistVar arrays.

## See Also

- `ISimpleFilletFeatureData2.GetSetbackDistanceCount`
- `ISimpleFilletFeatureData2.GetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.GetSetbackVertices`
- `ISimpleFilletFeatureData2.GetSetbackVerticesCount`
- `ISimpleFilletFeatureData2.IGetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.IGetSetbackVertices`
- `ISimpleFilletFeatureData2.SetSetbackVertices`