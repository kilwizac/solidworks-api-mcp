---
type: property
interface: IPMIDatumTarget
member: AreaStyle
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IPMIDatumTarget.Diameter
  - IPMIDatumTarget.Height
  - IPMIDatumTarget.Width
keywords:
  - areastyle
  - ipmidatumtarget
  - ipmi
  - datum
  - target
  - area
  - style
  - int32
  - iannotation
  - getpmidata
readonly: null
---

# IPMIDatumTarget.AreaStyle

Gets the area style of this PMI datum target.

## Signature

```csharp
System.Int32 AreaStyle {get; set;}
```
## Parameters

None.

## Return Value

Target area as defined in swPMIDatumTargetAreaStyle_e

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)

## See Also

- `IPMIDatumTarget.Diameter`
- `IPMIDatumTarget.Height`
- `IPMIDatumTarget.Width`