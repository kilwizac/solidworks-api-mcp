---
type: property
interface: IRibFeatureData2
member: FlipSide
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - flipside
  - iribfeaturedata2
  - rib
  - feature
  - data2
  - flip
  - side
  - boolean
readonly: null
---

# IRibFeatureData2.FlipSide

Gets or sets whether material is added to the reverse side of the rib.

## Signature

```csharp
System.Boolean FlipSide {get; set;}
```
## Parameters

None.

## Return Value

True if the material is added to the reverse side of the rib, false if not

## Remarks

Changing the value of this property does not affect geometry until
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
is called.

## Examples

- IRibFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRibFeatureData2)