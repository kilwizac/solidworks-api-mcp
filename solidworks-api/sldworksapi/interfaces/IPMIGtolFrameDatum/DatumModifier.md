---
type: property
interface: IPMIGtolFrameDatum
member: DatumModifier
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - datummodifier
  - ipmigtolframedatum
  - ipmi
  - gtol
  - frame
  - datum
  - modifier
  - int32
  - iannotation
  - getpmidata
readonly: null
---

# IPMIGtolFrameDatum.DatumModifier

Gets the material modifier of this Gtol frame datum.

## Signature

```csharp
System.Int32 DatumModifier {get; set;}
```
## Parameters

None.

## Return Value

Datum material modifier as defined in swMaterialModifier_e

## Remarks

Use
IPMIGtolFrameDatum::DatumModifierValue
to get this datum modifier's value, if one exists.

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)