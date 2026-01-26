---
type: property
interface: ICustomBendAllowance
member: BendCalculationTableFile
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
related: []
keywords:
  - bendcalculationtablefile
  - icustombendallowance
  - custom
  - bend
  - allowance
  - calculation
  - table
  - file
  - string
readonly: null
---

# ICustomBendAllowance.BendCalculationTableFile

Gets or sets the bend calculation table file path name.

## Signature

```csharp
System.String BendCalculationTableFile {get; set;}
```
## Parameters

None.

## Return Value

Bend calculation table file path name

## Remarks

If using this property to set a value for the bend deduction, then the
type of custom bend allowance
is set to this type. However, the last ICustomBendAllowance property called to set a value also re-sets the type of custom bend allowance to its type.
See the ICustomBendAllowance Remarks.

## Examples

- ICustomBendAllowance (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICustomBendAllowance)