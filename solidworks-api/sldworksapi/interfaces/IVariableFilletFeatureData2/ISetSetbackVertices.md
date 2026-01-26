---
type: method
interface: IVariableFilletFeatureData2
member: ISetSetbackVertices
returns: System.Boolean
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of vertices
  -
    name: VertArr
    type: Vertex
    description: in-process, unmanaged C++: Pointer to an array of setback vertices VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IVariableFilletFeatureData2.GetSetbackDistanceCount
  - IVariableFilletFeatureData2.GetSetbackVertexDistance
  - IVariableFilletFeatureData2.GetSetbackVertices
  - IVariableFilletFeatureData2.GetSetbackVerticesCount
  - IVariableFilletFeatureData2.IGetSetbackVertexDistance
  - IVariableFilletFeatureData2.IGetSetbackVertices
  - IVariableFilletFeatureData2.ISetSetbackVertexDistance
  - IVariableFilletFeatureData2.SetSetbackVertexDistance
  - IVariableFilletFeatureData2.SetSetbackVertices
keywords:
  - isetsetbackvertices
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - setback
  - vertices
  - count
  - int32
  - vert
  - arr
  - vertex
  - boolean
---

# IVariableFilletFeatureData2.ISetSetbackVertices

Sets the setback vertices for this variable fillet feature.

## Signature

```csharp
System.Boolean ISetSetbackVertices( 
   System.Int32
Count
,
   ref Vertex
VertArr
)
```
## Parameters

- `Count` (System.Int32): Number of vertices
- `VertArr` (Vertex): in-process, unmanaged C++: Pointer to an array of setback vertices VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if all edges of vertex are filleted, false if not

## Remarks

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
- `IVariableFilletFeatureData2.SetSetbackVertexDistance`
- `IVariableFilletFeatureData2.SetSetbackVertices`