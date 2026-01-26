---
type: property
interface: IPMIDatumTarget
member: Width
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IPMIDatumTarget.Unit
keywords:
  - width
  - ipmidatumtarget
  - ipmi
  - datum
  - target
  - double
  - iannotation
  - getpmidata
readonly: null
---

# IPMIDatumTarget.Width

Gets the PMI datum target width.

## Signature

```csharp
System.Double Width {get; set;}
```
## Parameters

None.

## Return Value

Datum target width

## Remarks

This property is valid only if
IPMIDatumTarget::AreaStyle
is set to
swPMIDatumTargetAreaStyle_e
.swPMIDatumTargetAreaStyle_Rectangular.

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)

## See Also

- `IPMIDatumTarget.Unit`