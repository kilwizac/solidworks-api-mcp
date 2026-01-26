---
type: method
interface: IVariableFilletFeatureData2
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
  - IVariableFilletFeatureData2.GetSetbackVertexDistance
  - IVariableFilletFeatureData2.GetSetbackVertices
  - IVariableFilletFeatureData2.GetSetbackVerticesCount
  - IVariableFilletFeatureData2.IGetSetbackVertices
  - IVariableFilletFeatureData2.ISetSetbackVertexDistance
  - IVariableFilletFeatureData2.SetSetbackVertexDistance
  - IVariableFilletFeatureData2.SetSetbackVertices
keywords:
  - getsetbackdistancecount
  - ivariablefilletfeaturedata2
  - variable
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

# IVariableFilletFeatureData2.GetSetbackDistanceCount

Gets the number of setback distances for the specified vertex on this variable fillet feature.

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

Because there is a one-to-one correspondence between the edges and distances, the count argument also represents the number of edges at the specified vertex.
Call this method before calling
IVariableFilletFeatureData2::IGetSetbackVertexDistance
.

## See Also

- `IVariableFilletFeatureData2.GetSetbackVertexDistance`
- `IVariableFilletFeatureData2.GetSetbackVertices`
- `IVariableFilletFeatureData2.GetSetbackVerticesCount`
- `IVariableFilletFeatureData2.IGetSetbackVertices`
- `IVariableFilletFeatureData2.ISetSetbackVertexDistance`
- `IVariableFilletFeatureData2.SetSetbackVertexDistance`
- `IVariableFilletFeatureData2.SetSetbackVertices`