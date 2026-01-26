---
type: property
interface: IIndentFeatureData
member: IsCut
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - iscut
  - iindentfeaturedata
  - indent
  - feature
  - data
  - cut
  - boolean
readonly: null
---

# IIndentFeatureData.IsCut

Gets or sets whether to remove the intersection area of the target body.

## Signature

```csharp
System.Boolean IsCut {get; set;}
```
## Parameters

None.

## Return Value

True to remove the intersection area of the target body, false to not

## Remarks

If this property is set to true, then there is no
thickness
, but
clearance
is applied.