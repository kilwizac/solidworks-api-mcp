---
type: method
interface: IDraftFeatureData2
member: GetDraftedEntityCount
returns: System.Int16
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IDraftFeatureData2.GetDraftedEntities
keywords:
  - getdraftedentitycount
  - idraftfeaturedata2
  - draft
  - feature
  - data2
  - drafted
  - entity
  - count
  - int16
---

# IDraftFeatureData2.GetDraftedEntityCount

Gets the number of drafted entities for this draft feature.

## Signature

```csharp
System.Int16 GetDraftedEntityCount()
```
## Parameters

None.

## Return Value

Number of drafted entities

## Remarks

Call this method before calling
IDraftFeatureData2::IGetDraftedEntities
to determine the size of the array for that method.

## See Also

- `IDraftFeatureData2.GetDraftedEntities`