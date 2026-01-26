---
type: method
interface: IDetailCircle
member: GetProfileItemsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDetailCircle.GetProfileItems
keywords:
  - getprofileitemscount
  - idetailcircle
  - detail
  - circle
  - profile
  - items
  - count
  - int32
---

# IDetailCircle.GetProfileItemsCount

Gets the number of sketch segments that make up this detail circle profile.

## Signature

```csharp
System.Int32 GetProfileItemsCount()
```
## Parameters

None.

## Return Value

Number of sketch segments that make up this detail circle profile

## Remarks

Call this method before calling
IDetailCircle::IGetProfileItems
to determine the size of the array.

## See Also

- `IDetailCircle.GetProfileItems`