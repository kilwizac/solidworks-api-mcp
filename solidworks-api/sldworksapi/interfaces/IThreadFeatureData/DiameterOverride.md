---
type: property
interface: IThreadFeatureData
member: DiameterOverride
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - diameteroverride
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - diameter
  - override
  - boolean
readonly: null
---

# IThreadFeatureData.DiameterOverride

Gets or sets whether to override the diameter of the cylindrical face or helix of this thread feature.

## Signature

```csharp
System.Boolean DiameterOverride {get; set;}
```
## Parameters

None.

## Return Value

True to override the diameter, false to not (default)

## Remarks

If this property is set to true, use
IThreadFeatureData::Diameter
to specify the override diameter.

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)