---
type: method
interface: IVariableFilletFeatureData2
member: GetSetbackVerticesCount
returns: System.Int32
parameters: []
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
  - IVariableFilletFeatureData2.IGetSetbackVertices
  - IVariableFilletFeatureData2.ISetSetbackVertexDistance
  - IVariableFilletFeatureData2.ISetSetbackVertices
  - IVariableFilletFeatureData2.SetSetbackVertexDistance
keywords:
  - getsetbackverticescount
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - setback
  - vertices
  - count
  - int32
---

# IVariableFilletFeatureData2.GetSetbackVerticesCount

Gets the number of setback vertices for this variable fillet feature.

## Signature

```csharp
System.Int32 GetSetbackVerticesCount()
```
## Parameters

None.

## Return Value

Number of setback vertices

## Remarks

Call this method before calling
IVariableFilletFeatureData2::IGetSetbackVertices
.

## See Also

- `IVariableFilletFeatureData2.GetSetbackDistanceCount`
- `IVariableFilletFeatureData2.GetSetbackVertexDistance`
- `IVariableFilletFeatureData2.GetSetbackVertices`
- `IVariableFilletFeatureData2.IGetSetbackVertexDistance`
- `IVariableFilletFeatureData2.IGetSetbackVertices`
- `IVariableFilletFeatureData2.ISetSetbackVertexDistance`
- `IVariableFilletFeatureData2.ISetSetbackVertices`
- `IVariableFilletFeatureData2.SetSetbackVertexDistance`