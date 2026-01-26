---
type: property
interface: ICustomBendAllowance
member: BendAllowance
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - bend
  - allowance
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - bendallowance
  - icustombendallowance
  - custom
  - double
  - ibaseflangefeaturedata
readonly: null
---

# ICustomBendAllowance.BendAllowance

Gets or sets the value of the bend allowance.

## Signature

```csharp
System.Double BendAllowance {get; set;}
```
## Parameters

None.

## Return Value

Value (m) of the bend allowance

## Remarks

If using this property to set a value for the bend allowance, then the
type of custom bend allowance
is set to this type. However, the last ICustomBendAllowance property set also re-sets the type of bend allowance to its type.
See the ICustomBendAllowance Remarks.

## Examples

- ICustomBendAllowance (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICustomBendAllowance)
- IBaseFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBaseFlangeFeatureData)