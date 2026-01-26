---
type: method
interface: IVariableFilletFeatureData2
member: SetSetbackVertices
returns: System.Boolean
parameters:
  -
    name: VertVar
    type: System.Object
    description: Array of vertices
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
  - IVariableFilletFeatureData2.ISetSetbackVertices
  - IVariableFilletFeatureData2.SetSetbackVertexDistance
keywords:
  - setsetbackvertices
  - ivariablefilletfeaturedata2
  - variable
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

# IVariableFilletFeatureData2.SetSetbackVertices

Sets the setback vertices for this variable fillet feature.

## Signature

```csharp
System.Boolean SetSetbackVertices( 
   System.Object
VertVar
)
```
## Parameters

- `VertVar` (System.Object): Array of vertices

## Return Value

True if setback vertices are set, false if not

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
- `IVariableFilletFeatureData2.ISetSetbackVertices`
- `IVariableFilletFeatureData2.SetSetbackVertexDistance`