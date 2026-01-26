---
type: property
interface: ICustomBendAllowance
member: BendDeduction
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
  - deduction
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - benddeduction
  - icustombendallowance
  - custom
  - allowance
  - double
readonly: null
---

# ICustomBendAllowance.BendDeduction

Gets or sets the value of the bend deduction.

## Signature

```csharp
System.Double BendDeduction {get; set;}
```
## Parameters

None.

## Return Value

Value of the bend deduction

## Remarks

If using this property to set a value for the bend deduction, then the
type of custom bend allowance
is set to this type. However, the last ICustomBendAllowance property called to set a value also re-sets the type of custom bend allowance to its type.
See the ICustomBendAllowance Remarks.

## Examples

- ICustomBendAllowance (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICustomBendAllowance)