---
type: property
interface: IPMIDatumTarget
member: Diameter
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
  - diameter
  - ipmidatumtarget
  - ipmi
  - datum
  - target
  - double
  - iannotation
  - getpmidata
readonly: null
---

# IPMIDatumTarget.Diameter

Gets the PMI datum target diameter.

## Signature

```csharp
System.Double Diameter {get; set;}
```
## Parameters

None.

## Return Value

Datum target diameter

## Remarks

This property is valid only if
IPMIDatumTarget::AreaStyle
is set to
swPMIDatumTargetAreaStyle_e
.swPMIDatumTargetAreaStyle_X or swPMIDatumTargetAreaStyle_Circular.

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)

## See Also

- `IPMIDatumTarget.Unit`