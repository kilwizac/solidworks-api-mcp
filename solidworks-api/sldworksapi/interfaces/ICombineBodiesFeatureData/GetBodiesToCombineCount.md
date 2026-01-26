---
type: method
interface: ICombineBodiesFeatureData
member: GetBodiesToCombineCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICombineBodiesFeatureData.BodiesToCombine
  - ICombineBodiesFeatureData.ISetBodiesToCombine
keywords:
  - getbodiestocombinecount
  - icombinebodiesfeaturedata
  - combine
  - bodies
  - feature
  - data
  - count
  - int32
---

# ICombineBodiesFeatureData.GetBodiesToCombineCount

Gets the number of bodies to combine.

## Signature

```csharp
System.Int32 GetBodiesToCombineCount()
```
## Parameters

None.

## Return Value

Number of bodies to combine

## Remarks

Call this method before calling
ICombineBodiesFeatureData::IGetBodiesToCombine
to determine the size of the array for that method.

## See Also

- `ICombineBodiesFeatureData.BodiesToCombine`
- `ICombineBodiesFeatureData.ISetBodiesToCombine`