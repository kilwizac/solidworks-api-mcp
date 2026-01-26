---
type: property
interface: IFillSurfaceFeatureData
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
  - ifillsurfacefeaturedata
  - fill
  - surface
  - feature
  - data
  - reverse
  - direction
  - boolean
readonly: null
---

# IFillSurfaceFeatureData.ReverseDirection

Gets or sets whether or not to reverse direction while merging results.

## Signature

```csharp
System.Boolean ReverseDirection {get; set;}
```
## Parameters

None.

## Return Value

True to reverse direction while merging results, false to not

## Remarks

When patching a solid with a fill surface, there are often two possible results. Use this method to reverse direction while merging results if the fill surface displays in an unwanted direction. See
IFillSurfaceFeatureData::Merge
for details about merging results.