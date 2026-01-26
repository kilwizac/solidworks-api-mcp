---
type: method
interface: IVariableFilletFeatureData2
member: IGetSetbackVertexDistance
returns: System.Double
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of edges and setback distances for this vertex
  -
    name: Vtx
    type: Vertex
    description: Vertex for which to get setback distance
  -
    name: EdgeArr
    type: Edge
    description: in-process, unmanaged C++: Pointer to an array of edges at the specified vertex (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IVariableFilletFeatureData2.GetSetbackVertexDistance
  - IVariableFilletFeatureData2.GetSetbackVertices
  - IVariableFilletFeatureData2.IGetSetbackVertices
  - IVariableFilletFeatureData2.ISetSetbackVertexDistance
  - IVariableFilletFeatureData2.ISetSetbackVertices
  - IVariableFilletFeatureData2.SetSetbackVertexDistance
  - IVariableFilletFeatureData2.SetSetbackVertices
keywords:
  - igetsetbackvertexdistance
  - ivariablefilletfeaturedata2
  - variable
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
  - double
---

# IVariableFilletFeatureData2.IGetSetbackVertexDistance

Gets the setback distance for the specified vertex on this variable fillet feature.

## Signature

```csharp
System.Double IGetSetbackVertexDistance( 
   System.Int32
Count
,
   Vertex
Vtx
,
   out Edge
EdgeArr
)
```
## Parameters

- `Count` (System.Int32): Number of edges and setback distances for this vertex
- `Vtx` (Vertex): Vertex for which to get setback distance
- `EdgeArr` (Edge): in-process, unmanaged C++: Pointer to an array of edges at the specified vertex (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

in-process, unmanaged C++: Pointer to an array of setback distances at the specified VBA, VB.NET, C#, and C++/CLI: Not supported

## Remarks

There is a one-to-one correspondence between the edge array and the setback distance array.
Before calling this method, call
IVariableFilletFeatureData2::GetSetbackDistanceCount
to get the number of edges and setback distances at the specified vertex.

## See Also

- `IVariableFilletFeatureData2.GetSetbackVertexDistance`
- `IVariableFilletFeatureData2.GetSetbackVertices`
- `IVariableFilletFeatureData2.IGetSetbackVertices`
- `IVariableFilletFeatureData2.ISetSetbackVertexDistance`
- `IVariableFilletFeatureData2.ISetSetbackVertices`
- `IVariableFilletFeatureData2.SetSetbackVertexDistance`
- `IVariableFilletFeatureData2.SetSetbackVertices`