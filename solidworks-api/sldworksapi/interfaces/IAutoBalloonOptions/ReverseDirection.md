---
type: property
interface: IAutoBalloonOptions
member: ReverseDirection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - reversedirection
  - iautoballoonoptions
  - auto
  - balloon
  - options
  - reverse
  - direction
  - boolean
readonly: null
---

# IAutoBalloonOptions.ReverseDirection

Gets and sets whether to reverse the item ordering of the balloons.

## Signature

```csharp
System.Boolean ReverseDirection {get; set;}
```
## Parameters

None.

## Return Value

True to reverse the item ordering, false to not; only valid when IAutoBalloonOptions::ItemOrder is set to swBalloonItemNumbersOrder_e .swBalloonItemNumbers_OrderSequentially

## Remarks

See the SOLIDWORKS Help for additional details about
autoballoons
.

## Examples

- IAutoBalloonOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAutoBalloonOptions)