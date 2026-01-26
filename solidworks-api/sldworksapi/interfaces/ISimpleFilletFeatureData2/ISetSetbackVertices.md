---
type: method
interface: ISimpleFilletFeatureData2
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
  - ISimpleFilletFeatureData2.GetSetbackDistanceCount
  - ISimpleFilletFeatureData2.GetSetbackVertexDistance
  - ISimpleFilletFeatureData2.GetSetbackVertices
  - ISimpleFilletFeatureData2.GetSetbackVerticesCount
  - ISimpleFilletFeatureData2.IGetSetbackVertexDistance
  - ISimpleFilletFeatureData2.SetSetbackVertexDistance
  - ISimpleFilletFeatureData2.SetSetbackVertices
keywords:
  - isetsetbackvertices
  - isimplefilletfeaturedata2
  - simple
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

# ISimpleFilletFeatureData2.ISetSetbackVertices

Sets the setback vertices for this simple fillet feature.

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

True if all edges of the vertex are filleted, false if not

## See Also

- `ISimpleFilletFeatureData2.GetSetbackDistanceCount`
- `ISimpleFilletFeatureData2.GetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.GetSetbackVertices`
- `ISimpleFilletFeatureData2.GetSetbackVerticesCount`
- `ISimpleFilletFeatureData2.IGetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.SetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.SetSetbackVertices`