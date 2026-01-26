---
type: method
interface: IVariableFilletFeatureData2
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
  - IVariableFilletFeatureData2.GetSetbackDistanceCount
  - IVariableFilletFeatureData2.GetSetbackVertices
  - IVariableFilletFeatureData2.GetSetbackVerticesCount
  - IVariableFilletFeatureData2.IGetSetbackVertexDistance
  - IVariableFilletFeatureData2.IGetSetbackVertices
  - IVariableFilletFeatureData2.ISetSetbackVertexDistance
  - IVariableFilletFeatureData2.ISetSetbackVertices
  - IVariableFilletFeatureData2.SetSetbackVertexDistance
  - IVariableFilletFeatureData2.SetSetbackVertices
keywords:
  - getsetbackvertexdistance
  - ivariablefilletfeaturedata2
  - variable
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

# IVariableFilletFeatureData2.GetSetbackVertexDistance

Gets the setback distance for the specified vertex on this variable fillet feature.

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

Array of setback distances at the specified

## Remarks

There is a one-to-one correspondence between the edge array and the setback distance array.

## See Also

- `IVariableFilletFeatureData2.GetSetbackDistanceCount`
- `IVariableFilletFeatureData2.GetSetbackVertices`
- `IVariableFilletFeatureData2.GetSetbackVerticesCount`
- `IVariableFilletFeatureData2.IGetSetbackVertexDistance`
- `IVariableFilletFeatureData2.IGetSetbackVertices`
- `IVariableFilletFeatureData2.ISetSetbackVertexDistance`
- `IVariableFilletFeatureData2.ISetSetbackVertices`
- `IVariableFilletFeatureData2.SetSetbackVertexDistance`
- `IVariableFilletFeatureData2.SetSetbackVertices`