---
type: property
interface: ICustomBendAllowance
member: KFactor
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - factor
  - kfactor
  - icustombendallowance
  - custom
  - bend
  - allowance
  - double
readonly: null
---

# ICustomBendAllowance.KFactor

Gets or sets the K-factor.

## Signature

```csharp
System.Double KFactor {get; set;}
```
## Parameters

None.

## Return Value

K-factor value

## Remarks

When using this property to set a value for K-factor, then the
type of custom bend allowance
is set to this type. However, the last ICustomBendAllowance property called to set a value also re-sets the type of custom bend allowance to its type.
See the ICustomBendAllowance Remarks.

## Examples

- ICustomBendAllowance (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICustomBendAllowance)