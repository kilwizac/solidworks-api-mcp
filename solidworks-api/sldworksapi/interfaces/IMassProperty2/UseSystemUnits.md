---
type: property
interface: IMassProperty2
member: UseSystemUnits
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - usesystemunits
  - imassproperty2
  - mass
  - property2
  - use
  - units
  - boolean
readonly: null
---

# IMassProperty2.UseSystemUnits

Gets or sets whether to use system units or document units when calculating mass properties.

## Signature

```csharp
System.Boolean UseSystemUnits {get; set;}
```
## Parameters

None.

## Return Value

True to use system units, false to use document units

## Remarks

The default value is true. Thus, system units (meters, radians, and kilograms) are used by default. All properties returning a value are adjusted accordingly.

## Examples

- IMassProperty2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMassProperty2)