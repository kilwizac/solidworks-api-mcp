---
type: method
interface: ISimpleFilletFeatureData2
member: SetSetbackVertices
returns: System.Boolean
parameters:
  -
    name: VertVar
    type: System.Object
    description: Array of setback vertices
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
  - ISimpleFilletFeatureData2.IGetSetbackVertices
  - ISimpleFilletFeatureData2.SetSetbackVertexDistance
keywords:
  - setsetbackvertices
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - setback
  - vertices
  - vert
  - var
  - object
  - boolean
---

# ISimpleFilletFeatureData2.SetSetbackVertices

Sets the setback vertices for this simple fillet feature.

## Signature

```csharp
System.Boolean SetSetbackVertices( 
   System.Object
VertVar
)
```
## Parameters

- `VertVar` (System.Object): Array of setback vertices

## Return Value

True if setback vertices are set, false if not

## See Also

- `ISimpleFilletFeatureData2.GetSetbackDistanceCount`
- `ISimpleFilletFeatureData2.GetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.GetSetbackVertices`
- `ISimpleFilletFeatureData2.GetSetbackVerticesCount`
- `ISimpleFilletFeatureData2.IGetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.IGetSetbackVertices`
- `ISimpleFilletFeatureData2.SetSetbackVertexDistance`