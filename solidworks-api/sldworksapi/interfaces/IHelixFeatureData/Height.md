---
type: property
interface: IHelixFeatureData
member: Height
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - height
  - ihelixfeaturedata
  - helix
  - feature
  - data
  - double
readonly: null
---

# IHelixFeatureData.Height

Gets or sets the height of this helix feature.

## Signature

```csharp
System.Double Height {get; set;}
```
## Parameters

None.

## Return Value

Height (see Remarks )

## Remarks

If the
helix is defined
as swHelixDefinedBy_e.swHelixDefinedByPitchAndRevolution, then you cannot change the height of the helix.