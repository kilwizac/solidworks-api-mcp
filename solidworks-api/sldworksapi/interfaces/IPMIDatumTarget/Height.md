---
type: property
interface: IPMIDatumTarget
member: Height
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
  - height
  - ipmidatumtarget
  - ipmi
  - datum
  - target
  - double
  - iannotation
  - getpmidata
readonly: null
---

# IPMIDatumTarget.Height

Gets the PMI datum target height.

## Signature

```csharp
System.Double Height {get; set;}
```
## Parameters

None.

## Return Value

Datum target height

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