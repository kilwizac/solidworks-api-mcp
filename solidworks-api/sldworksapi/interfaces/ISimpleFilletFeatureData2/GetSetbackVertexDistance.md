---
type: method
interface: ISimpleFilletFeatureData2
member: GetSetbackVertexDistance
returns: System.Object
parameters:
  -
    name: Vtx
    type: System.Object
    description: Vertex for which to get setback distance
  -
    name: EdgeVar
    type: System.Object
    description: Array of edges at the specified vertex (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISimpleFilletFeatureData2.GetSetbackDistanceCount
  - ISimpleFilletFeatureData2.GetSetbackVertices
  - ISimpleFilletFeatureData2.GetSetbackVerticesCount
  - ISimpleFilletFeatureData2.IGetSetbackVertexDistance
  - ISimpleFilletFeatureData2.IGetSetbackVertices
  - ISimpleFilletFeatureData2.ISetSetbackVertexDistance
  - ISimpleFilletFeatureData2.ISetSetbackVertices
  - ISimpleFilletFeatureData2.SetSetbackVertexDistance
  - ISimpleFilletFeatureData2.SetSetbackVertices
keywords:
  - getsetbackvertexdistance
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
---

# ISimpleFilletFeatureData2.GetSetbackVertexDistance

Gets the setback distance for the specified vertex on this simple fillet feature.

## Signature

```csharp
System.Object GetSetbackVertexDistance( 
   System.Object
Vtx
,
   out System.Object
EdgeVar
)
```
## Parameters

- `Vtx` (System.Object): Vertex for which to get setback distance
- `EdgeVar` (System.Object): Array of edges at the specified vertex (see Remarks )

## Return Value

Array of setback distances at the specified vertex

## Remarks

There is a one-to-one correspondence between the members of the EdgeVar array and the members of the returned setback distance array.

## See Also

- `ISimpleFilletFeatureData2.GetSetbackDistanceCount`
- `ISimpleFilletFeatureData2.GetSetbackVertices`
- `ISimpleFilletFeatureData2.GetSetbackVerticesCount`
- `ISimpleFilletFeatureData2.IGetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.IGetSetbackVertices`
- `ISimpleFilletFeatureData2.ISetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.ISetSetbackVertices`
- `ISimpleFilletFeatureData2.SetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.SetSetbackVertices`