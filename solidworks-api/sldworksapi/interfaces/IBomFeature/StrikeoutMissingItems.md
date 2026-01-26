---
type: property
interface: IBomFeature
member: StrikeoutMissingItems
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - features
related:
  - IBomFeature.KeepReplacedCompOption
keywords:
  - strikeoutmissingitems
  - ibomfeature
  - bom
  - feature
  - strikeout
  - missing
  - items
  - boolean
readonly: null
---

# IBomFeature.StrikeoutMissingItems

Inserts a horizontal line through }}-->missing items in this BOM table (also called strike outs).

## Signature

```csharp
System.Boolean StrikeoutMissingItems {get; set;}
```
## Parameters

None.

## Return Value

True to strike out suppressed components, false to not

## Remarks

Missing items are suppressed components.
This property is valid only if
IBomFeature::KeepMissingItems
is set to true.

## Examples

- IBomFeature (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBomFeature)

## See Also

- `IBomFeature.KeepReplacedCompOption`