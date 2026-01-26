---
type: method
interface: ISimpleFilletFeatureData2
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
  - ISimpleFilletFeatureData2.GetSetbackDistanceCount
  - ISimpleFilletFeatureData2.GetSetbackVertexDistance
  - ISimpleFilletFeatureData2.GetSetbackVertices
  - ISimpleFilletFeatureData2.IGetSetbackVertexDistance
  - ISimpleFilletFeatureData2.ISetSetbackVertexDistance
  - ISimpleFilletFeatureData2.ISetSetbackVertices
  - ISimpleFilletFeatureData2.SetSetbackVertexDistance
  - ISimpleFilletFeatureData2.SetSetbackVertices
keywords:
  - igetsetbackvertices
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - setback
  - vertices
  - count
  - int32
  - vertex
---

# ISimpleFilletFeatureData2.IGetSetbackVertices

Gets the setback vertices for this simple fillet feature.

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
ISimpleFilletFeatureData2::GetSetbackVerticesCount
to get the value for Count.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISimpleFilletFeatureData2.GetSetbackDistanceCount`
- `ISimpleFilletFeatureData2.GetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.GetSetbackVertices`
- `ISimpleFilletFeatureData2.IGetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.ISetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.ISetSetbackVertices`
- `ISimpleFilletFeatureData2.SetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.SetSetbackVertices`