---
type: property
interface: ISweptFlangeFeatureData
member: UseDefaultRadius
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - usedefaultradius
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - use
  - default
  - radius
  - boolean
readonly: null
---

# ISweptFlangeFeatureData.UseDefaultRadius

Gets or sets whether to use the bend radius from the original sheet metal feature in this swept flange feature.

## Signature

```csharp
System.Boolean UseDefaultRadius {get; set;}
```
## Parameters

None.

## Return Value

True to use the original sheet metal bend radius, false to use a custom bend radius (see Remarks )

## Remarks

If this property is false, then use
ISweptFlangeFeatureData::BendRadius
to get or set a custom bend radius.

## Examples

- ISweptFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweptFlangeFeatureData)