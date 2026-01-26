---
type: method
interface: ISplitBodyFeatureData
member: GetSplitBodiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISplitBodyFeatureData.GetSplitBodies
  - ISplitBodyFeatureData.ISetSplitBodies
  - ISplitBodyFeatureData.SetSplitBodies
keywords:
  - getsplitbodiescount
  - isplitbodyfeaturedata
  - split
  - body
  - feature
  - data
  - bodies
  - count
  - int32
---

# ISplitBodyFeatureData.GetSplitBodiesCount

Gets the number of split bodies in this Split feature.

## Signature

```csharp
System.Int32 GetSplitBodiesCount()
```
## Parameters

None.

## Return Value

Number of split bodies

## Remarks

Call this method before calling
ISplitBodyFeatureData::IGetSplitBodies
to determine the size of the array for that method.

## See Also

- `ISplitBodyFeatureData.GetSplitBodies`
- `ISplitBodyFeatureData.ISetSplitBodies`
- `ISplitBodyFeatureData.SetSplitBodies`