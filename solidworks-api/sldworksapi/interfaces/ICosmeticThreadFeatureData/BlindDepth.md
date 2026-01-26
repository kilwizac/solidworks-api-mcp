---
type: property
interface: ICosmeticThreadFeatureData
member: BlindDepth
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - blinddepth
  - icosmeticthreadfeaturedata
  - cosmetic
  - thread
  - feature
  - data
  - blind
  - depth
  - double
readonly: null
---

# ICosmeticThreadFeatureData.BlindDepth

Gets or sets the depth of a blind cosmetic thread.

## Signature

```csharp
System.Double BlindDepth {get; set;}
```
## Parameters

None.

## Return Value

Depth of the cosmetic thread (see Remarks )

## Remarks

If
ICosmeticThreadFeatureData::ApplyThread
is swApplyCosmeticThread_Blind, then use this property to get or set the depth of the cosmetic thread.

## Examples

- ICosmeticThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICosmeticThreadFeatureData)