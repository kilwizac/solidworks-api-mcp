---
type: method
interface: ISimpleFilletFeatureData2
member: ISetSetbackVertexDistance
returns: System.Boolean
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of setback distances
  -
    name: Vtx
    type: Vertex
    description: Vertex for which to set setback distance
  -
    name: EdgeArr
    type: Edge
    description: in-process, unmanaged C++: Pointer to an array of edges for this vertex VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: DistArr
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of distances VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
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
  - ISimpleFilletFeatureData2.ISetSetbackVertices
  - ISimpleFilletFeatureData2.SetSetbackVertexDistance
  - ISimpleFilletFeatureData2.SetSetbackVertices
keywords:
  - isetsetbackvertexdistance
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - setback
  - vertex
  - distance
  - count
  - int32
  - vtx
  - edge
  - arr
  - dist
  - double
  - boolean
---

# ISimpleFilletFeatureData2.ISetSetbackVertexDistance

Sets the setback distance for the specified vertex and its edges on this simple fillet feature.

## Signature

```csharp
System.Boolean ISetSetbackVertexDistance( 
   System.Int32
Count
,
   Vertex
Vtx
,
   ref Edge
EdgeArr
,
   ref System.Double
DistArr
)
```
## Parameters

- `Count` (System.Int32): Number of setback distances
- `Vtx` (Vertex): Vertex for which to set setback distance
- `EdgeArr` (Edge): in-process, unmanaged C++: Pointer to an array of edges for this vertex VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `DistArr` (System.Double): in-process, unmanaged C++: Pointer to an array of distances VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if the setback distance is set, false if not

## Remarks

There is a one-to-one correspondence between the edge array and the distance array.

## See Also

- `ISimpleFilletFeatureData2.GetSetbackDistanceCount`
- `ISimpleFilletFeatureData2.GetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.GetSetbackVertices`
- `ISimpleFilletFeatureData2.GetSetbackVerticesCount`
- `ISimpleFilletFeatureData2.ISetSetbackVertices`
- `ISimpleFilletFeatureData2.SetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.SetSetbackVertices`