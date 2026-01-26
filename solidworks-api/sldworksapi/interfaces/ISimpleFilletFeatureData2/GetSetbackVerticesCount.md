---
type: method
interface: ISimpleFilletFeatureData2
member: GetSetbackVerticesCount
returns: System.Int32
parameters: []
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
  - ISimpleFilletFeatureData2.IGetSetbackVertices
  - ISimpleFilletFeatureData2.ISetSetbackVertexDistance
  - ISimpleFilletFeatureData2.ISetSetbackVertices
  - ISimpleFilletFeatureData2.SetSetbackVertexDistance
  - ISimpleFilletFeatureData2.SetSetbackVertices
keywords:
  - getsetbackverticescount
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - setback
  - vertices
  - count
  - int32
---

# ISimpleFilletFeatureData2.GetSetbackVerticesCount

Gets the number of setback vertices for this simple fillet feature.

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
ISimpleFilletFeatureData2::IGetSetbackVertices
to get the size of the array for that method.

## See Also

- `ISimpleFilletFeatureData2.GetSetbackDistanceCount`
- `ISimpleFilletFeatureData2.GetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.GetSetbackVertices`
- `ISimpleFilletFeatureData2.IGetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.IGetSetbackVertices`
- `ISimpleFilletFeatureData2.ISetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.ISetSetbackVertices`
- `ISimpleFilletFeatureData2.SetSetbackVertexDistance`
- `ISimpleFilletFeatureData2.SetSetbackVertices`