---
type: property
interface: ILocalLinearPatternFeatureData
member: D2PatternSeedOnly
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - d2patternseedonly
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - d2
  - seed
  - only
  - boolean
readonly: null
---

# ILocalLinearPatternFeatureData.D2PatternSeedOnly

Gets or sets whether to create a pattern in Direction 2 using the seed component only, without replicating the pattern instances of Direction 1, in this bidirectional linear component pattern feature.

## Signature

```csharp
System.Boolean D2PatternSeedOnly {get; set;}
```
## Parameters

None.

## Return Value

True to create a pattern in Direction 2 using the seed component only without replicating the pattern instances of Direction 1, false to not

## Remarks

See
Accessing Selections that Define Features
for additional details on using this property.
For more information, see the
Linear Component Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.

## Examples

- ILocalLinearPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ILocalLinearPatternFeatureData)