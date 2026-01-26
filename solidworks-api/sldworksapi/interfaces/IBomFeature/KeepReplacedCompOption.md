---
type: property
interface: IBomFeature
member: KeepReplacedCompOption
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - features
related:
  - IBomFeature.StrikeoutMissingItems
keywords:
  - keepreplacedcompoption
  - ibomfeature
  - bom
  - feature
  - keep
  - replaced
  - comp
  - option
  - int32
readonly: null
---

# IBomFeature.KeepReplacedCompOption

Gets or sets how to replace components when keeping missing items.

## Signature

```csharp
System.Int32 KeepReplacedCompOption {get; set;}
```
## Parameters

None.

## Return Value

Option for replacing components as defined in swKeepReplacedCompOption_e

## Remarks

This property is valid only if
IBomFeature::KeepMissingItems
is set to true.

## Examples

- IBomFeature (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBomFeature)

## See Also

- `IBomFeature.StrikeoutMissingItems`