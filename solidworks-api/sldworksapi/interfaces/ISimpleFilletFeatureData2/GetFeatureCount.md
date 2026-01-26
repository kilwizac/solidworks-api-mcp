---
type: method
interface: ISimpleFilletFeatureData2
member: GetFeatureCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.Features
  - ISimpleFilletFeatureData2.ISetFeatures
keywords:
  - getfeaturecount
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - count
  - int32
---

# ISimpleFilletFeatureData2.GetFeatureCount

Gets the number of features on which to create a simple radius fillet.

## Signature

```csharp
System.Int32 GetFeatureCount()
```
## Parameters

None.

## Return Value

Number of features

## Remarks

Call this method before calling
ISimpleFilletFeatureData2::IGetFeatures
to get the size of the array for that method.

## See Also

- `ISimpleFilletFeatureData2.Features`
- `ISimpleFilletFeatureData2.ISetFeatures`