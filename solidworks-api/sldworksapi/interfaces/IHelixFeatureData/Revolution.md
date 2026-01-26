---
type: property
interface: IHelixFeatureData
member: Revolution
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - revolution
  - ihelixfeaturedata
  - helix
  - feature
  - data
  - double
readonly: null
---

# IHelixFeatureData.Revolution

Gets or sets the number of revolutions for this helix feature.

## Signature

```csharp
System.Double Revolution {get; set;}
```
## Parameters

None.

## Return Value

Number of revolutions (see Remarks )

## Remarks

If the
helix is defined
as swHelixDefinedBy_e.swHelixDefinedByHeightAndPitch, then you cannot change the number of revolutions in the helix.
You must specify a value greater than the previous region's revolution value and less than the next region's revolution value.