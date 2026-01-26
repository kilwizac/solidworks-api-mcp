---
type: method
interface: ISimpleFilletFeatureData2
member: GetSetbackDistanceCount
returns: System.Int32
parameters:
  -
    name: Vtx
    type: Vertex
    description: Vertex
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.GetSetbackVertexDistance
  - ISimpleFilletFeatureData2.GetSetbackVertices
  - ISimpleFilletFeatureData2.GetSetbackVerticesCount
  - ISimpleFilletFeatureData2.IGetSetbackVertices
  - ISimpleFilletFeatureData2.ISetSetbackVertexDistance
  - ISimpleFilletFeatureData2.ISetSetbackVertices
  - ISimpleFilletFeatureData2.SetSetbackVertexDistance
  - ISimpleFilletFeatureData2.SetSetbackVertices
keywords:
  - getsetbackdistancecount
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - setback
  - distance
  - count
  - vtx
  - vertex
  - int32
---

# ISimpleFilletFeatureData2.GetSetbackDistanceCount

Gets the number of setback distances for the specified vertex on this simple fillet feature.

## Signature

```csharp
System.Int32 GetSetbackDistanceCount( 
   Vertex
Vtx
)
```
## Parameters

- `Vtx` (Vertex): Vertex

## Return Value

Number of setback distances and number of edges

## Remarks

Because there is a one-to-one correspondence between the edges and distances, the Count argument also represents the number of edges at the specified vertex.
Call this method before calling
ISimpleFilletFeatureData2::IGetSetbackVertexDistance
to get the number setback distances and number of edges for the vertex.

## See Also

- `ISimpleFilletFeatureData2.GetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.GetSetbackVertices`
- `ISimpleFilletFeatureData2.GetSetbackVerticesCount`
- `ISimpleFilletFeatureData2.IGetSetbackVertices`
- `ISimpleFilletFeatureData2.ISetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.ISetSetbackVertices`
- `ISimpleFilletFeatureData2.SetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.SetSetbackVertices`