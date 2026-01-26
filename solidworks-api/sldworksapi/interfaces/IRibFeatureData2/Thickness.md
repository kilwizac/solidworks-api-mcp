---
type: property
interface: IRibFeatureData2
member: Thickness
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - thickness
  - iribfeaturedata2
  - rib
  - feature
  - data2
  - double
readonly: null
---

# IRibFeatureData2.Thickness

Gets or set the overall thickness of the rib.

## Signature

```csharp
System.Double Thickness {get; set;}
```
## Parameters

None.

## Return Value

Thickness of the rib

## Remarks

Changing the value of this property does not affect geometry until
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
is called.

## Examples

- IRibFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRibFeatureData2)