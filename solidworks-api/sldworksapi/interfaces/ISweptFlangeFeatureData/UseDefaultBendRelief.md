---
type: property
interface: ISweptFlangeFeatureData
member: UseDefaultBendRelief
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - usedefaultbendrelief
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - use
  - default
  - bend
  - relief
  - boolean
readonly: null
---

# ISweptFlangeFeatureData.UseDefaultBendRelief

Gets or sets whether to use the bend relief from the original sheet metal feature in this swept flange feature.

## Signature

```csharp
System.Boolean UseDefaultBendRelief {get; set;}
```
## Parameters

None.

## Return Value

True to use the default bend relief, false to specify custom bend relief values (see Remarks )

## Remarks

For cylindrical/conical swept flanges, this property is valid only during creation.
If this property is false, then you can set:
ISweptFlangeFeatureData::ReliefType
ISweptFlangeFeatureData::UseReliefRatio
If ISweptFlangeFeatureData::UseReliefRatio is:
True, then you can set
ISweptFlangeFeatureData::ReliefRatio
.
False, then you can set
ISweptFlangeFeatureData::ReliefDepth
and
ISweptFlangeFeatureData::ReliefWidth
.

## Examples

- ISweptFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweptFlangeFeatureData)