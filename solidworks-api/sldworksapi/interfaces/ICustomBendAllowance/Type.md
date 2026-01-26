---
type: property
interface: ICustomBendAllowance
member: Type
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - type
  - icustombendallowance
  - custom
  - bend
  - allowance
  - int32
  - ibaseflangefeaturedata
readonly: null
---

# ICustomBendAllowance.Type

Gets or sets the bend allowance type.

## Signature

```csharp
System.Int32 Type {get; set;}
```
## Parameters

None.

## Return Value

Bend allowance type as defined in swBendAllowanceTypes_e

## Remarks

After setting
ICustomBendAllowance::BendAllowance
,
ICustomBendAllowance::BendDeduction
,
ICustomBendAllowance::BendTableFile
,
ICustomBendAllowance::BendCalculationTableFile
, and
ICustomBendAllowance::KFactor
use this property to set the value for the type. If you do not set this property last, the ICustomBendAllowance property set last automatically overrides any previously set custom bend allowance type.
See the ICustomBendAllowance Remarks.
See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- ICustomBendAllowance (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICustomBendAllowance)
- IBaseFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBaseFlangeFeatureData)