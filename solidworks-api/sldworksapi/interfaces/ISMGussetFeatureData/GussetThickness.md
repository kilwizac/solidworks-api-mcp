---
type: property
interface: ISMGussetFeatureData
member: GussetThickness
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - gussetthickness
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - thickness
  - double
readonly: null
---

# ISMGussetFeatureData.GussetThickness

Gets or sets the indent thickness of this gusset.

## Signature

```csharp
System.Double GussetThickness {get; set;}
```
## Parameters

None.

## Return Value

Indent thickness

## Remarks

This property is valid only if
ISMGussetFeatureData::ProfileDimensionScheme
is set to 0.

## Examples

- ISMGussetFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMGussetFeatureData)