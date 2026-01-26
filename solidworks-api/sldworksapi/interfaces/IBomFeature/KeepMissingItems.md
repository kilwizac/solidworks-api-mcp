---
type: property
interface: IBomFeature
member: KeepMissingItems
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
  - IBomFeature.StrikeoutMissingItems
keywords:
  - keepmissingitems
  - ibomfeature
  - bom
  - feature
  - keep
  - missing
  - items
  - boolean
readonly: null
---

# IBomFeature.KeepMissingItems

Gets and sets the Keep Missing Items option for this BOM feature.

## Signature

```csharp
System.Boolean KeepMissingItems {get; set;}
```
## Parameters

None.

## Return Value

True to keep suppressed components, false to not

## Remarks

Missing items are suppressed components.

## Examples

- IBomFeature (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBomFeature)

## See Also

- `IBomFeature.KeepReplacedCompOption`
- `IBomFeature.StrikeoutMissingItems`