---
type: property
interface: IPMIGtolFrameDatum
member: DatumLinkedModifier1
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - datumlinkedmodifier1
  - ipmigtolframedatum
  - ipmi
  - gtol
  - frame
  - datum
  - linked
  - modifier1
  - int32
  - iannotation
  - getpmidata
readonly: null
---

# IPMIGtolFrameDatum.DatumLinkedModifier1

Gets the modifier of the first linked datum of this Gtol frame datum.

## Signature

```csharp
System.Int32 DatumLinkedModifier1 {get; set;}
```
## Parameters

None.

## Return Value

First linked datum material modifier as defined in swMaterialModifier_e

## Remarks

Use
IPMIGtolFrameDatum::DatumLinkedModifierValue1
to get this linked datum's modifier value, if one exists.

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)