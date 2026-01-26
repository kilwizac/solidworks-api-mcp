---
type: property
interface: IPMIGtolFrameDatum
member: Datum
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - datum
  - ipmigtolframedatum
  - ipmi
  - gtol
  - frame
  - string
  - iannotation
  - getpmidata
readonly: null
---

# IPMIGtolFrameDatum.Datum

Gets the Gtol frame datum.

## Signature

```csharp
System.String Datum {get; set;}
```
## Parameters

None.

## Return Value

Gtol frame datum

## Remarks

In the Geometric Tolerance Properties dialog, you can specify up to two datums linked to the Primary, Secondary, and Tertiary datums. Click the drop-down selector next to each datum field to pop up a linked datum dialog where you can specify the linked datums and their material modifiers.
This property gets the primary, secondary, or tertiary datum. Use
IPMIGtolFrameDatum::DatumLinked1
and
IPMIGtolFrameDatum::DatumLinked2
to get the datums linked to this datum.

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)