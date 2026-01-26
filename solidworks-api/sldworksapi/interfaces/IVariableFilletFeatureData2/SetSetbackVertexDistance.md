---
type: method
interface: IVariableFilletFeatureData2
member: SetSetbackVertexDistance
returns: System.Boolean
parameters:
  -
    name: Vtx
    type: System.Object
    description: Vertex for which to set the setback distance
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
  - IVariableFilletFeatureData2.GetSetbackDistanceCount
  - IVariableFilletFeatureData2.GetSetbackVertexDistance
  - IVariableFilletFeatureData2.GetSetbackVertices
  - IVariableFilletFeatureData2.GetSetbackVerticesCount
  - IVariableFilletFeatureData2.IGetSetbackVertexDistance
  - IVariableFilletFeatureData2.IGetSetbackVertices
  - IVariableFilletFeatureData2.ISetSetbackVertexDistance
  - IVariableFilletFeatureData2.ISetSetbackVertices
  - IVariableFilletFeatureData2.SetSetbackVertices
keywords:
  - setsetbackvertexdistance
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
  - dist
  - boolean
---

# IVariableFilletFeatureData2.SetSetbackVertexDistance

Sets the setback distances on fillet edges from the specified fillet corner vertex on this variable fillet feature.

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

- `Vtx` (System.Object): Vertex for which to set the setback distance
- `EdgeVar` (System.Object): Array of edges for this vertex
- `DistVar` (System.Object): Array of distances

## Return Value

True if setback distances are set, false if not

## Remarks

There is a one-to-one correspondence between the arrays specified by EdgeVar and DistVar.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IVariableFilletFeatureData2.GetSetbackDistanceCount`
- `IVariableFilletFeatureData2.GetSetbackVertexDistance`
- `IVariableFilletFeatureData2.GetSetbackVertices`
- `IVariableFilletFeatureData2.GetSetbackVerticesCount`
- `IVariableFilletFeatureData2.IGetSetbackVertexDistance`
- `IVariableFilletFeatureData2.IGetSetbackVertices`
- `IVariableFilletFeatureData2.ISetSetbackVertexDistance`
- `IVariableFilletFeatureData2.ISetSetbackVertices`
- `IVariableFilletFeatureData2.SetSetbackVertices`