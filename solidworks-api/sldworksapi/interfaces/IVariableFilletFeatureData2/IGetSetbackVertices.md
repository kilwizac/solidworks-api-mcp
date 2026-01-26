---
type: method
interface: IVariableFilletFeatureData2
member: IGetSetbackVertices
returns: Vertex
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of setback vertices
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IVariableFilletFeatureData2.GetSetbackDistanceCount
  - IVariableFilletFeatureData2.GetSetbackVertexDistance
  - IVariableFilletFeatureData2.GetSetbackVertices
  - IVariableFilletFeatureData2.IGetSetbackVertexDistance
  - IVariableFilletFeatureData2.ISetSetbackVertexDistance
  - IVariableFilletFeatureData2.ISetSetbackVertices
  - IVariableFilletFeatureData2.SetSetbackVertexDistance
  - IVariableFilletFeatureData2.SetSetbackVertices
keywords:
  - igetsetbackvertices
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - setback
  - vertices
  - count
  - int32
  - vertex
---

# IVariableFilletFeatureData2.IGetSetbackVertices

Gets the setback vertices for this variable fillet feature.

## Signature

```csharp
Vertex IGetSetbackVertices( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of setback vertices

## Return Value

in-process, unmanaged C++: Pointer to an array of setback vertices VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IVariableFilletFeatureData2::GetSetbackVerticesCount
.

## See Also

- `IVariableFilletFeatureData2.GetSetbackDistanceCount`
- `IVariableFilletFeatureData2.GetSetbackVertexDistance`
- `IVariableFilletFeatureData2.GetSetbackVertices`
- `IVariableFilletFeatureData2.IGetSetbackVertexDistance`
- `IVariableFilletFeatureData2.ISetSetbackVertexDistance`
- `IVariableFilletFeatureData2.ISetSetbackVertices`
- `IVariableFilletFeatureData2.SetSetbackVertexDistance`
- `IVariableFilletFeatureData2.SetSetbackVertices`