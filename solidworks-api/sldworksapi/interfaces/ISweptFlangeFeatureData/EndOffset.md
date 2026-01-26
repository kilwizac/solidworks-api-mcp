---
type: property
interface: ISweptFlangeFeatureData
member: EndOffset
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - endoffset
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - end
  - offset
  - double
readonly: null
---

# ISweptFlangeFeatureData.EndOffset

Gets or sets the end offset of this swept flange feature.

## Signature

```csharp
System.Double EndOffset {get; set;}
```
## Parameters

None.

## Return Value

End offset

## Remarks

This property is valid only if
ISweptFlangeFeatureData::Path
is an open loop.
If you want the swept flange to span the entire edge of the model, set both this property and
ISweptFlangeFeatureData::StartOffset
to 0.0.

## Examples

- ISweptFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweptFlangeFeatureData)