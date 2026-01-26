---
type: property
interface: IToolingSplitFeatureData
member: InterlockSurface
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - interlocksurface
  - itoolingsplitfeaturedata
  - tooling
  - split
  - feature
  - data
  - interlock
  - surface
  - boolean
readonly: null
---

# IToolingSplitFeatureData.InterlockSurface

Gets or sets whether to create an interlock surface for this tooling split feature.

## Signature

```csharp
System.Boolean InterlockSurface {get; set;}
```
## Parameters

None.

## Return Value

True to create an interlock surface, false to not

## Remarks

If this property is set to true, then you can specify a
draft angle
for the interlock surface.
See
Accessing Selections that Define Features
for additional details.

## Examples

- IToolingSplitFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IToolingSplitFeatureData)