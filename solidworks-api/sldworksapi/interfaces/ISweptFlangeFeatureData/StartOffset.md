---
type: property
interface: ISweptFlangeFeatureData
member: StartOffset
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - startoffset
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - start
  - offset
  - double
readonly: null
---

# ISweptFlangeFeatureData.StartOffset

Gets or sets the start offset of this swept flange feature.

## Signature

```csharp
System.Double StartOffset {get; set;}
```
## Parameters

None.

## Return Value

Start offset

## Remarks

This property is valid only if
ISweptFlangeFeatureData::Path
is an open loop.
If you want the swept flange to span the entire edge of the model, set both this property and
ISweptFlangeFeatureData::EndOffset
to 0.0.

## Examples

- ISweptFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweptFlangeFeatureData)