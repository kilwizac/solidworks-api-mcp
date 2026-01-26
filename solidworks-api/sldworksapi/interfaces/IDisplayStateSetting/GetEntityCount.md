---
type: method
interface: IDisplayStateSetting
member: GetEntityCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IDisplayStateSetting.Entities
keywords:
  - getentitycount
  - idisplaystatesetting
  - display
  - state
  - setting
  - entity
  - count
  - int32
---

# IDisplayStateSetting.GetEntityCount

Gets the number of entities for this display state setting.

## Signature

```csharp
System.Int32 GetEntityCount()
```
## Parameters

None.

## Return Value

Number of entities

## Remarks

Call this method to get the size of the array returned by
IDisplayStateSetting::IGetEntities
.

## See Also

- `IDisplayStateSetting.Entities`