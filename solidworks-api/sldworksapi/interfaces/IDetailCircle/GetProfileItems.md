---
type: method
interface: IDetailCircle
member: GetProfileItems
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDetailCircle.GetProfileItemsCount
  - IDetailCircle.IGetProfileItems
keywords:
  - getprofileitems
  - idetailcircle
  - detail
  - circle
  - profile
  - items
  - object
---

# IDetailCircle.GetProfileItems

Gets the sketch segments that make up this detail circle profile.

## Signature

```csharp
System.Object GetProfileItems()
```
## Parameters

None.

## Return Value

Array of the sketch segments that make up this detail circle profile

## Remarks

Do not modify the sketch segments returned by this method. This method only provides information about the profile geometry of the detail circle. To modify a detail circle, use
IDetailCircle::SetParameters
.

## See Also

- `IDetailCircle.GetProfileItemsCount`
- `IDetailCircle.IGetProfileItems`