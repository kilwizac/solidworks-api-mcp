---
type: method
interface: IDetailCircle
member: HasFullOutline
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDetailCircle.SetFullOutline
keywords:
  - hasfulloutline
  - idetailcircle
  - detail
  - circle
  - has
  - full
  - outline
  - boolean
---

# IDetailCircle.HasFullOutline

Gets whether this detail circle has a full outline in the detail view.

## Signature

```csharp
System.Boolean HasFullOutline()
```
## Parameters

None.

## Return Value

True if the detail circle has a full outline in the detail view, false if not

## Remarks

This method is only available when
IDetailCircle::NoOutline
is false.

## See Also

- `IDetailCircle.SetFullOutline`