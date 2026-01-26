---
type: property
interface: IPMIGtolFrameDatum
member: DatumLinkedModifier2
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - datumlinkedmodifier2
  - ipmigtolframedatum
  - ipmi
  - gtol
  - frame
  - datum
  - linked
  - modifier2
  - int32
  - iannotation
  - getpmidata
readonly: null
---

# IPMIGtolFrameDatum.DatumLinkedModifier2

Gets the modifier of the second linked datum of this Gtol frame datum.

## Signature

```csharp
System.Int32 DatumLinkedModifier2 {get; set;}
```
## Parameters

None.

## Return Value

Second linked datum material modifier as defined in swMaterialModifier_e

## Remarks

Use
IPMIGtolFrameDatum::DatumLinkedModifierValue2
to get this linked datum's modifier value, if one exists.

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)