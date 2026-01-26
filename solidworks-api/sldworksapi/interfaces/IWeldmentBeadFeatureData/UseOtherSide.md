---
type: property
interface: IWeldmentBeadFeatureData
member: UseOtherSide
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - useotherside
  - iweldmentbeadfeaturedata
  - weldment
  - bead
  - feature
  - data
  - use
  - other
  - side
  - boolean
readonly: null
---

# IWeldmentBeadFeatureData.UseOtherSide

Gets or sets whether to apply the weld bead to both sides of the intersecting faces.

## Signature

```csharp
System.Boolean UseOtherSide {get; set;}
```
## Parameters

None.

## Return Value

True to apply the weld bead to both sides, false to not

## Remarks

This property is valid, and optional, for full length and intermittent weld beads only. Use
IWeldmentBeadFeatureData::BeadType
to determine the type of weld bead.
See
Accessing Selections that Define Features
for additional details.

## Examples

- IWeldmentBeadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWeldmentBeadFeatureData)