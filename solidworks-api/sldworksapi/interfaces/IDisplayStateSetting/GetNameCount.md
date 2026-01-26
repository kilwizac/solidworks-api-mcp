---
type: method
interface: IDisplayStateSetting
member: GetNameCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IDisplayStateSetting.Names
keywords:
  - getnamecount
  - idisplaystatesetting
  - display
  - state
  - setting
  - name
  - count
  - int32
---

# IDisplayStateSetting.GetNameCount

Gets the number of display states for this display state setting.

## Signature

```csharp
System.Int32 GetNameCount()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Call this method to get the size of the array returned by
IDisplayStateSetting::IGetNames
.

## See Also

- `IDisplayStateSetting.Names`