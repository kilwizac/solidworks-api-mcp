---
type: property
interface: ISweptFlangeFeatureData
member: ReverseDirection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - reversedirection
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - reverse
  - direction
  - boolean
readonly: null
---

# ISweptFlangeFeatureData.ReverseDirection

Gets or sets whether to reverse the direction of sheet metal thickness of this swept flange feature.

## Signature

```csharp
System.Boolean ReverseDirection {get; set;}
```
## Parameters

None.

## Return Value

True to reverse direction of thickness, false to not

## Remarks

This property is valid only when creating the swept flange in a non-sheet-metal part.

## Examples

- ISweptFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweptFlangeFeatureData)